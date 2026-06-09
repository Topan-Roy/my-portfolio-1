import React, { useState } from "react";
import Swal from "sweetalert2";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please fill in all fields before submitting.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    try {
      const res = await fetch("https://my-portfolio-server-blush.vercel.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I’ll get back to you soon.",
          confirmButtonColor: "#06b6d4",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: data.message || "Something went wrong. Try again later.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Unable to connect to the server. Please try again later.",
        confirmButtonColor: "#ef4444",
      });
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Contact <span className="text-cyan-500">Me</span>
        </h3>
        <p className="text-gray-400 mt-2 text-lg">Get in touch</p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-5 bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 transition-all px-6 py-3 rounded-lg font-semibold w-full sm:w-fit"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col gap-6 flex-1 bg-gray-800 p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 hover:translate-x-2 transition">
            <MdOutlineEmail className="text-4xl p-2 bg-cyan-500 rounded-full" />
            <span className="text-lg">roytopan734@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 hover:translate-x-2 transition">
            <MdOutlineAddIcCall className="text-4xl p-2 bg-cyan-500 rounded-full" />
            <span className="text-lg">+8801706541105</span>
          </div>
          <div className="flex items-center gap-4 hover:translate-x-2 transition">
            <CiLocationOn className="text-4xl p-2 bg-cyan-500 rounded-full" />
            <span className="text-lg">Dinajpur, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
