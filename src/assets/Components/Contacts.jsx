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
         
<button className="contact-bt"  type="submit" id="submit">
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        />
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>

        {/* <button type="submit" id="submit">Submit Form</button> */}

        <p className="result-message">{result}</p>
      </form>
    </div>
  );
}
