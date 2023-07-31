import React from "react";
import ContactForm from "./forms/ContactForm";

export default function Contact() {
  return (
    <>
      <h1 className="text-4xl text-center my-6">Contact Us</h1>
      <div className="flex justify-evenly flex-wrap">
        <div className="flex flex-col max-w-[66%] min-w-[600px] border-r">
          <div className="flex justify-evenly flex-wrap">
            <div className="w-[250px] text-center bg-neutral border border-accent rounded-lg p-3 font-bold shadow-lg shadow-secondary">
              <h2 className="text-2xl  text-center">Call us: </h2>
              <a href="tel:3038157012" className="text-xl  text-center">
                (303) 815-7012
              </a>
            </div>
            <div className="w-[250px] text-center bg-neutral border border-accent rounded-lg p-3 font-bold shadow-lg shadow-secondary">
              <h2 className="text-2xl text-center">Email us: </h2>
              <a
                href="mailto:info@denverdjservices.com"
                className="text-xl  text-center"
              >
                info@denverdjservices.com
              </a>
            </div>
          </div>
          <h4 className="text-xl text-center mt-6">OR</h4>
          <div className="flex justify-center">
            <p className="text-center text-xl mt-6 max-w-[66%] font-bold">
              Leave us a message below if you are interested in booking a DJ.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <ContactForm />
          </div>
        </div>
        <div className=" flex flex-col max-w-[600px] align-center place-items-center text-center">
          <h2 className="text-2xl font-bold">Check us out on social media!</h2>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdenversbestweddingdjs%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="130"
            title="facebook link"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="mt-9 rounded-lg"
          ></iframe>
          <iframe
            src="https://embedsocial.com/api/pro_hashtag/56c4992acff5b897fd9baec3c2fee0a71fb05b19"
            width="100%"
            height="500px"
            title="instagram feed"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="my-9 rounded-lg"
          ></iframe>
        </div>
      </div>
    </>
  );
}
