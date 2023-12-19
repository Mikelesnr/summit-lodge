"use client";
import React, { Component } from "react";
import Title from "./Title";

import { FaMugHot, FaSatellite, FaFan, FaWifi } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaMugHot />,
        title: "Breakfast",
        info: "Access to dining services for all meals and room service as an option. ",
      },
      {
        icon: <FaSatellite />,
        title: "Dstv ",
        info: "Full bouquet Dstv, all channels available for your viewing pleasure. ",
      },
      {
        icon: <FaFan />,
        title: "Air Conditioning",
        info: "All rooms are airconditioned tom make your environment as comfortable as possible. ",
      },
      {
        icon: <FaWifi />,
        title: "Wifi",
        info: "All rooms have highspeed fiber optic Wi-Fi so you can keep up with your work and social life. ",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
