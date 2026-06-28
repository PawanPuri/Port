import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";
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

    formData1.append("access_key", "3ebddbbd-0098-4df0-b063-5c42a39662a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData1,
    });
    const data = await response.json();

    if (data.success) {
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1000);
    } else {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const infoItems = [
    { icon: FaMapMarkerAlt, title: "Location", value: "Indore, MP" },
    { icon: FaEnvelope, title: "Email", value: "pawanpuri300@gmail.com" },
    { icon: FaPhone, title: "Phone", value: "+91 9691630789" },
  ];

  const formFields = [
    { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    { id: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
    { id: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
  ];

  return (
    <section className="contact">
      <AnimatedSection className="section-header">
        <h2>Get In Touch</h2>
        <p>
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </p>
      </AnimatedSection>

      <div className="contact-content">
        <AnimatedSection className="contact-info" direction="left" delay={0.1}>
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              className="info-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                <item.icon />
              </motion.div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="contact-map"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681443.3352079373!2d75.813005!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc7b2d3a5825%3A0x9a3349a42a6ed31d!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1614294673642!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Indore map"
            ></iframe>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="contact-form-container" direction="right" delay={0.2}>
          <h3>Send Me a Message</h3>

          {formStatus.submitted ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="success-icon"
              >
                ✓
              </motion.div>
              <h4>Thank you for your message!</h4>
              <p>I'll get back to you as soon as possible.</p>
              <motion.button
                onClick={() =>
                  setFormStatus({
                    submitted: false,
                    submitting: false,
                    error: false,
                  })
                }
                className="btn primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.id}
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <label htmlFor={field.id}>{field.label}</label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.01, borderColor: '#64ffda' }}
                  />
                </motion.div>
              ))}

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <label htmlFor="message">Your Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello, I'm interested in working with you on a project..."
                  rows="6"
                  whileFocus={{ scale: 1.01, borderColor: '#64ffda' }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="btn primary-btn submit-btn"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(100, 255, 218, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
