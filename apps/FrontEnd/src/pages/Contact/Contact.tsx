import React, { useState } from "react";
import { createContact } from "../../services/contactService.ts";
import "./Contact.css";
import phoneIcon from "../../assets/phone-solid.svg";
import emailIcon from "../../assets/envelope-solid.svg";
import locationIcon from "../../assets/location-dot-solid.svg";
import contactPhoto from "../../assets/contact.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    description: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createContact(
        formData.email,
        formData.firstName,
        formData.lastName,
        formData.description,
      );
      setStatus("Form submitted successfully!");
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <main className="contact">
      <div className="contact-info">
        <div className="contact-details">
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="contact-logo" />
            <p>+33 39 93 93 03</p>
          </div>
          <div className="contact-item">
            <img src={emailIcon} alt="Email" className="contact-logo" />
            <p>contact@topspin.fr</p>
          </div>
          <div className="contact-item">
            <img src={locationIcon} alt="Location" className="contact-logo" />
            <p>345 Rue République, 59000 Lille</p>
          </div>
        </div>
        <img src={contactPhoto} alt="Contact" className="contact-photo" />
      </div>
      <div className="contact-form">
        <h1>Contact nous !</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Envoyer !</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </main>
  );
};

export default Contact;
