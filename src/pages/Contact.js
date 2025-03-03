import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData(e.target);
    setFormStatus({ submitting: true, submitted: false, error: false });

    // Normally, we would send this to a backend API
    // Simulating API call with setTimeout
    formData1.append("access_key", "3ebddbbd-0098-4df0-b063-5c42a39662a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData1,
    });
    const data = await response.json();

    if (data.success) {
      setTimeout(() => {
        // Assuming submission is successful
        console.log("Form submitted:", formData);
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1000);
    } else {
      setFormStatus({ submitting: true, submitted: false, error: true });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="contact"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2>Get In Touch</h2>
        <p>
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </p>
      </motion.div>

      <motion.div className="contact-content" variants={containerVariants}>
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="info-item">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Location</h4>
              <p>Indore, MP</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <p>pawanpuri300@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <FaPhone />
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 9691630789</p>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681443.3352079373!2d75.813005!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc7b2d3a5825%3A0x9a3349a42a6ed31d!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1614294673642!5m2!1sen!2sin"
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Indore map"
            ></iframe>
          </div>
        </motion.div>

        <motion.div className="contact-form-container" variants={itemVariants}>
          <h3>Send Me a Message</h3>

          {formStatus.submitted ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4>Thank you for your message!</h4>
              <p>I'll get back to you as soon as possible.</p>
              <button
                onClick={() =>
                  setFormStatus({
                    submitted: false,
                    submitting: false,
                    error: false,
                  })
                }
                className="btn primary-btn"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello, I'm interested in working with you on a project..."
                  rows="6"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn primary-btn submit-btn"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
