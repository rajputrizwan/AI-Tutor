import { NextResponse } from "next/server";
import OpenAI from "openai";

// Define prompt templates for student and teacher feedback
export const STUDENT_FEEDBACK_PROMPT = `
You are an expert educator providing personalized feedback to a student.
Topic: {{topic}}

Given the student's answers to the following questions, provide detailed, positive feedback on how the student can improve their learning. Include specific suggestions, recommended blogs, books, and other resources.

Questions and answers:
{{qa}}

Format the feedback as a clear, readable text.
`;

export const TEACHER_FEEDBACK_PROMPT = `
You are an expert educator providing personalized feedback to a teacher.
Topic: {{topic}}

Given the teacher's answers to the following questions, provide detailed, positive feedback on how the teacher can improve their teaching. Include specific suggestions, recommended blogs, books, and other resources.

Questions and answers:
{{qa}}

Format the feedback as a clear, readable text.
`;

export async function POST(req) {
  try {
    const { userType, topic, questions, answers } = await req.json();

    if (!userType || !topic || !questions || !answers) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Build a formatted Q&A string for the prompt
    const qaText = questions
      .map((q, i) => {
        const answer = answers[i] ?? "No answer provided";
        return `${i + 1}. Q: ${q.question}\n   A: ${answer}`;
      })
      .join("\n\n");

    // Select prompt template based on userType
    let promptTemplate = "";
    if (userType === "student") promptTemplate = STUDENT_FEEDBACK_PROMPT;
    else if (userType === "teacher") promptTemplate = TEACHER_FEEDBACK_PROMPT;
    else
      return NextResponse.json(
        { error: "Invalid userType. Must be 'student' or 'teacher'." },
        { status: 400 }
      );

    // Replace placeholders
    const prompt = promptTemplate
      .replace("{{topic}}", topic)
      .replace("{{qa}}", qaText);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 800,
    });

    const feedback = completion.choices[0].message.content;

    return NextResponse.json({ feedback });
  } catch (e) {
    console.error("API error:", e?.message || e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
