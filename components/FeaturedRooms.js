"use client";
import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

// export default class FeaturedRooms extends Component {
// static contextType = RoomContext;
const Featured = () => {
  return (
    <div>
      <h2>featured</h2>
    </div>
  );
  // render() {
  //   // const value = this.context;
  //   let { loading, featuredRooms: rooms } = this.context;
  //   rooms = rooms.map((room) => <Room key={room.id} room={room} />);
  //   return (
  //     <section className="featured-rooms">
  //       <Title title="Featured Rooms" />
  //       <div className="featured-rooms-center">
  //         {loading ? <Loading /> : rooms}
  //       </div>
  //     </section>
  //   );
  // }
};

export default Featured;
