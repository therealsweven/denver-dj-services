import React from "react";
import bobbyPic from "./images/bobby.JPG";

export default function About() {
  return (
    <>
      <h1 className="text-3xl text-center mt-6">About</h1>
      <div className="flex flex-wrap-reverse justify-center mt-3">
        <div className="flex flex-col justify-center align-center p-12 max-w-4xl">
          <h3 className="text-left text-justify m-3 text-xl">
            Founded by Bobby Simpson AKA SWEVEN in 2023, Denver DJ Services is
            dedicated to providing those in the Denver area with the most
            magical experience you've ever had with a professional DJ. Although
            we may be a newer business, our DJs are not new to this whatsoever,
            all having a minimum of 7 years experience as professional DJs.
          </h3>
          <h3 className="text-left text-justify m-3 text-xl">
            We strive to provide our clients with a top-notch, customizable
            experience tailored to your needs. We understand that not all
            weddings are the same, or you may want to do something out of the
            ordinary for your company party. Whatever your needs are, we do our
            best to accommadate. Some of our DJs are professional music
            producers and have been able to provide clients with custom tracks
            for events. Let's say you want a mashup of 5 songs for a
            father-daughter dance or a special birthday song, we can do it!
          </h3>
          <h3 className="text-left text-justify m-3 text-xl">
            This is more than just a job for our DJs, it is their passion and
            they want you to have nothing but the best possible service. We look
            forward to working with you and cannot wait to hear about the
            details of your special day!
          </h3>
        </div>
        <div className=" flex flex-col justify-center align-center">
          <img
            className="w-60 h-80 rounded-full border"
            src={bobbyPic}
            alt="Owner and Founder Bobby Simpson"
          />
        </div>
      </div>
    </>
  );
}
