import { NextResponse } from "next/server";
import OpenAI from "openai";

// Define prompt templates for student and teacher
export const STUDENT_QUESTION_PROMPT = `
You are an expert educator generating study questions for a student.
Topic: {{topic}}

Generate 5 multiple choice questions with options. Return the response as a JSON array in this format:

[
  {
    "question": "Question text",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
  },
  ...
]
`;

export const TEACHER_QUESTION_PROMPT = `
You are an expert teacher creating quiz questions for educators.
Topic: {{topic}}

Generate 5 multiple choice questions with options. Return the response as a JSON array in this format:

[
  {
    "question": "Question text",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"]
  },
  ...
]
`;

export async function POST(req) {
  try {
    const { userType, topic } = await req.json();

    let promptTemplate = "";
    if (userType === "student") promptTemplate = STUDENT_QUESTION_PROMPT;
    else if (userType === "teacher") promptTemplate = TEACHER_QUESTION_PROMPT;
    else
      return NextResponse.json(
        { error: "Invalid userType. Must be 'student' or 'teacher'." },
        { status: 400 }
      );

    // Replace placeholder {{topic}} with actual topic
    const prompt = promptTemplate.replace("{{topic}}", topic);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }],
    });

    const responseText = completion.choices[0].message.content;

    // Parse the response as JSON
    let parsedQuestions = [];
    try {
      parsedQuestions = JSON.parse(responseText);
    } catch (parseError) {
      console.warn("Failed to parse AI response as JSON. Returning raw text.");
      parsedQuestions = [];
    }

    return NextResponse.json({ questions: parsedQuestions });
  } catch (e) {
    console.error("API error:", e?.message || e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
