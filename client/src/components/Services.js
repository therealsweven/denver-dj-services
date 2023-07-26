import React from "react";
import cermonyPic from "./images/wedding-ceremony.jpg";
import receptionPic from "./images/wedding-reception-card.jpg";
import bundlePic from "./images/wedding-bundle-card.jpg";
import schoolCorpPic from "./images/school-dance-card.jpg";
import "./css/services.css";
import InquiryForm from "./forms/InquiryForm";

export default function Services() {
  return (
    <>
      <main className="align-items-center mb-6">
        <div className="items-center flex flex-col align-center">
          <h1 className="text-3xl text-center mt-6">Services</h1>
          <h4 className="text-xl text-center text-justify w-9/12 my-6">
            Our DJs are trained to provide you with the most magical vibes for
            any event you may need us for. Whether your looking for an emcee/DJ
            for your wedding reception, a school dance, a company party, a
            birthday party, a kids party, you name it, we've gotcha covered!
            Please see below for our standard packages, and don't hesitate to
            contact us with any questions you may have, i.e. you need something
            not listed in our standard packages.
          </h4>
        </div>
        <div>
          <div id="packageCardsTop" className="flex flex-wrap justify-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-2  bg-secondary border border-accent">
              <figure>
                <img src={cermonyPic} alt="Wedding Ceremony" />
              </figure>
              <div className="card-body text-center items-center">
                <h2 className="card-title text-center">
                  Wedding Ceremony Package
                </h2>
                <p>Starting at $399</p>
                <p className="text-lg">
                  Includes a DJ, two small PA speakers and a wireless lapel mic
                  for the minister. Custom selection of pre-ceremony playlist
                  and ceremony walkdown songs.
                </p>
                <div className="card-actions justify-center">
                  <InquiryForm />
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-2  bg-secondary border border-accent">
              <figure>
                <img src={receptionPic} alt="Wedding Reception" />
              </figure>
              <div className="card-body text-center items-center">
                <h2 className="card-title text-center">
                  Wedding Reception Package
                </h2>
                <p>Starting at $799</p>
                <p className="text-lg">
                  Includes a DJ, two large PA speakers, basic disco lights,
                  strobe lights, and lasers for dance floor upon request.
                  Package includes up to 5 hours of reception music, or more at
                  an additional hourly cost, AND a DJ/emcee to guide everyone
                  through the event. Also includes a consultation to review the
                  soundtrack for your special day.
                </p>
                <div className="card-actions justify-center">
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>
          <div
            id="packageCardsBottom"
            className="flex flex-wrap justify-center"
          >
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-2  bg-secondary border border-accent">
              <figure>
                <img src={bundlePic} alt="Wedding Bundle" />
              </figure>
              <div className="card-body text-center items-center">
                <h2 className="card-title text-center">
                  Wedding Bundle Package
                </h2>
                <p>Starting at $999</p>
                <p className="text-lg">
                  Includes a DJ, two large PA speakers and a wireless lapel mic
                  for the minister. Custom selection of pre-ceremony playlist
                  and ceremony walkdown songs. basic disco lights, strobe
                  lights, and lasers for dance floor upon request. Package
                  includes up to 5 hours of reception music, or more at an
                  additional hourly cost, AND a DJ/emcee to guide everyone
                  through the event. Also includes a consultation to review the
                  soundtrack for your special day.
                </p>
                <div className="card-actions justify-center">
                  <InquiryForm />
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-2 bg-secondary border border-accent">
              <figure>
                <img src={schoolCorpPic} alt="School Dance" />
              </figure>
              <div className="card-body text-center items-center">
                <h2 className="card-title text-center">
                  School/Corporate Events
                </h2>
                <p>Starting at $399</p>
                <p className="text-lg">
                  Includes a DJ and up to 3 hours of music for a school or
                  corporate event. Additional time may be added for $100/hr. Two
                  large PAs included, enough to fill a large room or outdoor
                  space with hundreds of people. Lighting options available.
                </p>
                <div className="card-actions justify-center">
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
