import React from "react";
import ContactForm from "./forms/ContactForm";

export default function Contact() {
  return (
    <>
      <h1 className="text-3xl text-center my-6">Contact Us</h1>
      <p className="text-center">
        {" "}
        Please send us a message below if you are interested in booking a DJ,
      </p>
      <p className="text-center">or call us at (303) 815-7012</p>
      <div className="flex justify-center mt-6">
        <ContactForm />
      </div>
    </>
  );
}
