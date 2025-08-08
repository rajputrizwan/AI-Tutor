"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const toastStyles = {
    success: {
      background: theme === "dark" ? "#1f2937" : "#ffffff", // dark: gray-800, light: white
      color: theme === "dark" ? "#f9fafb" : "#111827", // dark: gray-50, light: gray-900
    },
    error: {
      background: theme === "dark" ? "#7f1d1d" : "#fee2e2", // dark: red-900, light: red-100
      color: theme === "dark" ? "#fecaca" : "#991b1b", // dark: red-200, light: red-900
    },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!", {
          style: toastStyles.success,
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again.", {
          style: toastStyles.error,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("⚠ Something went wrong. Please try again.", {
        style: toastStyles.error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <section className="pt-32 pb-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Have questions or need help? We're here for you.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full rounded-md bg-white dark:bg-gray-700 border shadow-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full rounded-md bg-white dark:bg-gray-700 border shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full rounded-md bg-white dark:bg-gray-700 border shadow-sm"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full rounded-md bg-white dark:bg-gray-700 border shadow-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <div className="ml-3">
                    <p className="font-medium">Email</p>
                    <p>mrizwan2702@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <div className="ml-3">
                    <p className="font-medium">Phone</p>
                    <p>+92 3118200769</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <div className="ml-3">
                    <p className="font-medium">Address</p>
                    <p>
                      Park Road
                      <br />
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-500" />
                  <div className="ml-3">
                    <p className="font-medium">Business Hours</p>
                    <p>
                      Mon - Fri: 9am - 5pm PST
                      <br />
                      Sat - Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
