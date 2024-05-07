"use client";
import React from "react";
import Title from "./Title";
import RoomsBooking from "./RoomsBooking";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNumGuestsChange = this.onNumGuestsChange.bind(this);
    this.onNumRoomsChange = this.onNumRoomsChange.bind(this);
    this.onCheckInChange = this.onCheckInChange.bind(this);
    this.onCheckOutChange = this.onCheckOutChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.sendForm = this.sendForm.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      checkIn: "",
      checkOut: "",
      numRooms: "",
      numGuests: "",
      phone: "",
    };
    this.display = false;
    this.item = {};
  }

  sendForm() {
    this.display = true;
    console.log(this.state);
  }

  onFirstNameChange(e) {
    const firstName = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        firstName,
      };
    });
  }
  onLastNameChange(e) {
    const lastName = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        lastName,
      };
    });
  }
  onEmailChange(e) {
    const email = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        email,
      };
    });
  }
  onCheckInChange(e) {
    const checkIn = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        checkIn,
      };
    });
  }
  onCheckOutChange(e) {
    const checkOut = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        checkOut,
      };
    });
  }
  onNumRoomsChange(e) {
    const numRooms = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        numRooms,
      };
    });
  }
  onNumGuestsChange(e) {
    const numGuests = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        numGuests,
      };
    });
  }
  onPhoneChange(e) {
    const phone = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        phone,
      };
    });
  }

  render() {
    return (
      <div>
        <div className=" p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <Title title="Book Room" />
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="firstName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="firstName"
                      name="firstName"
                      id="firstname"
                      value={this.state.firstName}
                      onChange={this.onFirstNameChange}
                      placeholder="First Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="lastName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="lastName"
                      name="lastName"
                      id="lastname"
                      value={this.state.lastName}
                      onChange={this.onLastNameChange}
                      placeholder="Last Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="numGuests"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="numGuests"
                      id="numGuests"
                      value={this.state.numGuests}
                      onChange={this.onNumGuestsChange}
                      placeholder="0"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="numRooms"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Number of Rooms
                    </label>
                    <input
                      type="number"
                      name="numRooms"
                      id="numRooms"
                      value={this.state.numRooms}
                      onChange={this.onNumRoomsChange}
                      placeholder="0"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="phone"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.onPhoneChange}
                      placeholder="+263 772 000 000"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="email"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onEmailChange}
                      placeholder="address@email.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="checkIn"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Check In
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      id="checkIn"
                      value={this.state.checkIn}
                      onChange={this.onCheckInChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="checkOut"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Check out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      id="checkOut"
                      value={this.state.checkOut}
                      onChange={this.onCheckOutChange}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Are you coming to the event?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                  />
                  <label
                    for="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    className="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
            </div> */}
              <div className="flex items-center justify-center">
                {this.state.checkIn && this.state.checkOut ? (
                  <RoomsBooking item={this.state} />
                ) : (
                  <></>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  formAction={this.sendForm}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="btn-form mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingForm;
