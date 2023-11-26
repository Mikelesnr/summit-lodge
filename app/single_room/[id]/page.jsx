"use client";
import React, { Component } from "react";
import defaultBcg from "@assets/images/room-1.jpeg";
import Banner from "@components/Banner";
import Link from "next/link";
import { RoomContext } from "@assets/context";
// import StyledHero from "@components/StyledHero";
import Hero from "@components/Hero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    // this.state = {
    //   slug: this.props.match.params.slug,
    //   defaultBcg: defaultBcg,
    // };
  }
  static contextType = RoomContext;
  render() {
    // const { getRoom } = this.context;
    // const room = getRoom(this.state.slug);
    const room = true;

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        {/* Style hero is used so that we can use dynamic bakground for each
        single room */}
        {/* <StyledHero img={images[0] || this.state.defaultBcg}> */}
        <Hero>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </Hero>
        {/* </StyledHero> */}
        <section className="single-room">
          <div className="single-room-images">
            {images.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price :${price}</h6>
              <h6>size :{size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? ` ${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
