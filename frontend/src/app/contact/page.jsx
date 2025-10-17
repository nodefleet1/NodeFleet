"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in touch today
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              If you have any inquiries regarding our services, get in touch with
              us either by email, phone, or send us your inquiry by filling in a
              form.
            </p>

            {/* Email & Phone */}
            <div className="bg-gray-50 p-6 rounded-2xl mb-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="bg-violet-100 p-4 rounded-full text-violet-600 mr-5">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Email & Phone No:
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Email: info@nextasecurity.com <br />
                    Phone: +1 646-820-0470
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <div className="bg-violet-100 p-4 rounded-full text-violet-600 mr-5">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Location Address:
                  </h3>
                  <p className="text-gray-700 text-sm">
                    1250 Broadway, 36th Floor <br />
                    New York, NY 10001 <br />
                    US
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Send us your inquiry
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name.."
                className="w-full mb-5 p-4 bg-gray-100 rounded-xl text-gray-700 outline-none focus:bg-gray-200"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address..."
                className="w-full mb-5 p-4 bg-gray-100 rounded-xl text-gray-700 outline-none focus:bg-gray-200"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Enter your message"
                className="w-full mb-5 p-4 bg-gray-100 rounded-xl text-gray-700 outline-none focus:bg-gray-200"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-all w-full"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </main>
  );
}
