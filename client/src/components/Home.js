import React from "react";
import { Link } from "react-router-dom";
import weddingIcon from "./images/wedding-icon.png";
import danceIcon from "./images/dance-icon.png";
import partyIcon from "./images/party-icon.png";
import carouselPic1 from "./images/andreas-ronningen-S2YssLw97l4-unsplash.jpg";
import carouselPic2 from "./images/neal-e-johnson-fwXkHBFoETE-unsplash.jpg";
import carouselPic3 from "./images/mitchell-orr-ine1sPh-bag-unsplash.jpg";
import carouselPic4 from "./images/thomas-william-1IPCQ-cRD5k-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={carouselPic1}
            className="w-full"
            alt="magical wedding with sparklers"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={carouselPic2}
            className="w-full"
            alt="people dancing at wedding to best dj music ever"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={carouselPic3}
            className="w-full"
            alt="people on dance floor with wedding dj in background"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={carouselPic4}
            className="w-full"
            alt="they did it let's party sign, bottom of wedding dress in background"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row text-center p-6">
        <div className="grid flex-grow card bg-base-300 rounded-box p-5 border place-items-center">
          <img
            src={weddingIcon}
            alt="wedding icon"
            className="object-contain w-1/2  mb-4"
          />

          <h1 className="text-center text-xl">Weddings</h1>
          <p>
            We would be honored to help bring the vibes on your special day. We
            will help make your wedding a day to remember for everyone in
            attendance.{" "}
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow card bg-base-300 rounded-box p-5 border place-items-center">
          <img
            src={danceIcon}
            alt="dance icon"
            className="object-contain w-1/2 mb-4"
          />
          <h1 className="text-center text-xl">Dances</h1>
          <p>
            Do you need a DJ for your school dance? Don't worry, we're happy to
            keep things kid-friendly and provide them with an experience they
            won't forget!
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow card bg-base-300 rounded-box p-5 border place-items-center">
          <img
            src={partyIcon}
            alt="dance icon"
            className="object-contain w-1/2"
          />
          <h1 className="text-center text-xl">Parties</h1>
          <p>
            Whether it's a birthday party, or a corporate event, we've gotcha
            covered! Our DJs are well-versed in a variety of music genres and
            getting the people moving.
          </p>
        </div>
      </div>
      <h2 className="text-center text-2xl">And MORE!</h2>
      <div className="flex justify-center">
        <Link to="/contact">
          <button class="btn btn-accent text-white my-6">
            Contact Us Today
          </button>
        </Link>
      </div>
    </div>
  );
}
