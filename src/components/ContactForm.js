import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import default styles for toast
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Use toast.promise to handle the email sending process
      await toast.promise(
        emailjs.send(
          "service_onqa51f",
          "template_7ux110i",
          {
            from_name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          "vOHgsy753ZqMESJsr"
        ),
        {
          pending: "Sending message...", // Loading state
          success: "Message sent successfully!", // Success state
          error: {
            render({ data }) {
              // Log the full error object for debugging
              console.error("Error details:", data);

              // Extract a user-friendly message from the error
              const errorMessage =
                data?.message || "Failed to send the message. Please try again.";
              return errorMessage;
            },
          },
        }
      );

      // Clear the form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Catch any unexpected errors
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="section-title">
        Contact <span>Us</span>
      </h2>
      <form onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input form-textarea"
          />
        </div>
        <div className="center-containera">
          <button type="submit" className="btn">
            <strong>SEND</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </div>
      </form>
      {/* Add ToastContainer to render the toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;