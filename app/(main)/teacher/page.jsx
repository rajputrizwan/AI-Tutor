"use client";

import { useState } from "react";

export default function TeacherInfoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    experience: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher info submitted:", form);
    alert("Form submitted!");
    setForm({
      name: "",
      email: "",
      subject: "",
      experience: "",
      notes: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 rounded-md shadow-md
                 bg-white text-gray-900
                 dark:bg-gray-800 dark:text-gray-100"
    >
      <h2 className="text-2xl font-semibold mb-6">Teacher Information</h2>

      <label className="block mb-4">
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded border border-gray-300
                     bg-white text-gray-900
                     px-3 py-2
                     placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </label>

      <label className="block mb-4">
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded border border-gray-300
                     bg-white text-gray-900
                     px-3 py-2
                     placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </label>

      <label className="block mb-4">
        Subject Taught:
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded border border-gray-300
                     bg-white text-gray-900
                     px-3 py-2
                     placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </label>

      <label className="block mb-4">
        Years of Experience:
        <input
          type="number"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          min="0"
          className="mt-1 w-full rounded border border-gray-300
                     bg-white text-gray-900
                     px-3 py-2
                     placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </label>

      <label className="block mb-6">
        Additional Notes:
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
          className="mt-1 w-full rounded border border-gray-300
                     bg-white text-gray-900
                     px-3 py-2
                     placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded
                   hover:bg-blue-700 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        Submit
      </button>
    </form>
  );
}
