export function createStudentPrompt(topic) {
  const prompts = {
    learning_style:
      "Generate a set of 5 questions to determine a student's learning style, including visual, auditory, and kinesthetic preferences. Provide multiple choice options.",
    interests:
      "Generate 5 questions to determine a student's interests in subjects like math, science, language arts, or social studies.",
    weaknesses:
      "Generate 5 questions to identify areas where a student may struggle in subjects like math or language arts.",
  };

  return (
    prompts[topic] ||
    "Generate a general set of 5 questions to assess the student."
  );
}

export function createTeacherPrompt(topic) {
  const prompts = {
    teaching_style:
      "Generate a set of 5 questions to determine a teacher's teaching style, including their approach to lesson planning, classroom management, and student engagement.",
    class_management:
      "Generate 5 questions about classroom management techniques.",
    student_assessment:
      "Generate 5 questions for assessing student understanding.",
  };

  return (
    prompts[topic] ||
    "Generate a general set of 5 questions to assess the teacher."
  );
}
