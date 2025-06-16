import React from "react";
import "../Style/Contact.css";
import Swal from 'sweetalert2'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1144cd58-2c3f-4966-b1cf-44c2ada2137d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className="container-form "id="contacts">
      <form onSubmit={onSubmit} className="contact-form">
        <h2>Contact Us</h2>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="your@email.com" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Write your message here..." rows="5" required></textarea>

        <button type="submit" id="submit">Submit Form</button>

        <p className="result-message">{result}</p>
      </form>
    </div>
  );
}
