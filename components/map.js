import React from "react";
import Iframe from "react-iframe";

export default function Map() {
  return (
    <div>
      <h2 className="mb-12 text-3xl font-bold">Directions</h2>
      <div className="map-div">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7387.997945551164!2d29.99551970762577!3d-22.202145335433737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec8c914f8ae4739%3A0x27c53b28a705a55d!2sSummit%20Guest%20house!5e0!3m2!1sen!2szw!4v1703140046815!5m2!1sen!2szw"
          width=""
          height=""
          id="map"
          className="map"
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
}
