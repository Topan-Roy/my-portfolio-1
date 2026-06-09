"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const contactInfo = [
  {
    type: "email",
    href: "mailto:roytopan734@gmail.com",
    label: "roytopan734@gmail.com",
    icon: FaEnvelope,
  },
  {
    type: "phone",
    href: "tel:+8801706541105",
    label: "+8801706541105",
    icon: FaPhone,
  },
  {
    type: "location",
    label: "Dinajpur, Bangladesh",
    icon: FaLocationDot,
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Topan-Roy",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/topanroy/",
    icon: FaLinkedinIn,
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Missing information",
        text: "Please fill in all fields before submitting.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    // 1. Send email to roytopan734@gmail.com using Web3Forms
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "647117aa-38ca-4130-a5b0-196db2a19b8d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    // 2. Save data to your MongoDB Server
    try {
      const response = await fetch(
        "https://my-portfolio-server-blush.vercel.app/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message sent",
          text: "Thank you for reaching out. I will get back to you soon.",
          confirmButtonColor: "#06b6d4",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Message failed",
          text: data.message || "Something went wrong. Try again later.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server error",
        text: "Unable to connect to the server. Please try again later.",
        confirmButtonColor: "#ef4444",
      });
      console.error(error);
    }
  };

  return (
    <section id="contact" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let us build something useful.</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Send a message for web projects, mobile apps, collaboration, or full
            stack work. I usually respond as soon as I can.
          </p>

          <div className="mt-8 grid gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon />
                  <span>{item.label}</span>
                </>
              );

              return item.href ? (
                <a href={item.href} className="contact-line" key={item.type}>
                  {content}
                </a>
              ) : (
                <div className="contact-line" key={item.type}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={item.label}
                  key={item.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows={7}
            />
          </label>
          <button type="submit" className="btn-primary contact-submit-btn w-full justify-center sm:w-fit">
            Send Message
            <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
