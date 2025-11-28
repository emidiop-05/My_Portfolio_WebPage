import React, { useState } from "react";
import styles from "./ContactMe.module.css";

export const ContactMe = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const formSpreeUrl = "https://formspree.io/f/xzzlkgoq";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(formSpreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS! Thank you for your message.");
        setFormData({ name: "", surname: "", email: "", message: "" });
      } else {
        setStatus("ERROR: Message failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("ERROR: Connection failed.");
      console.error("Submission error:", error);
    }
  };

  return (
    <div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.inputField}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={styles.inputField}
          required
        ></textarea>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </div>
  );
};
