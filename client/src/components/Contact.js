import React from "react";
import ContactForm from "./forms/ContactForm";

export default function Contact() {
  return (
    <>
      <h1 className="text-3xl text-center">Contact Us</h1>
      <p>
        {" "}
        Please send us a message below if you are interested in booking a DJ,
      </p>
      <p>or call us at (303) 815-7012</p>
      <ContactForm />
    </>
  );
}
