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
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut iste aperiam. Ipsam reprehenderit reiciendis",
      },
      {
        icon: <FaSatellite />,
        title: "Dstv ",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut iste aperiam. Ipsam reprehenderit reiciendis",
      },
      {
        icon: <FaFan />,
        title: "Air Conditioning",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut iste aperiam. Ipsam reprehenderit reiciendis",
      },
      {
        icon: <FaWifi />,
        title: "Wifi",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ut iste aperiam. Ipsam reprehenderit reiciendis",
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
