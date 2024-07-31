"use client";
import React, { Component, createContext } from "react";
import items from "./data";
const RoomContext = createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    // this.getData();
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    // let maxPrice = Math.max(...rooms.map((item) => item.price));
    // let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      // price: maxPrice,
      // maxPrice,
      // maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      //converting the image object to image array
      let images = item.fields.images.map((image) => image.fields.file.url);
      // adding the images & id
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  //   // Getting room based on room id
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// withRoomConsumer is higher order Component that is a component accepting as component
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
