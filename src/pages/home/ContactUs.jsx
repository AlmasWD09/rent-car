import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ContactUs = () => {
  return (
    <div className="font-Poppins">
      <div className="relative  bg-[url('assets/contact-us-bg.png')] bg-cover h-[300px] lg:h-[600px]  w-full flex justify-center items-center ">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-700 opacity-80"></div>
        <h1 className="uppercase  font-BebasNeue text-5xl lg:text-9xl text-white/60 z-20">
          Contact us
        </h1>
      </div>
      <div className="container mx-auto py-10 px-4">
        <p className=" text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu arcu enim. Nunc turpis est, placerat a porta rutrum, aliquam a
          magna. Phasellus ac molestie urna. Fusce blandit quis nulla vel
          gravida. Donec quis mauris ut nisi pulvinar efficitur. Curabitur in
          imperdiet orci, quis sollicitudin dolor. Sed nulla metus, varius ac
          aliquet vitae, hendrerit eu arcu. Curabitur diam libero, iaculis at
          auctor quis, porta efficitur justo.{" "}
        </p>

        <div className="flex flex-col lg:flex-row  gap-20  pt-28 h-full px-4">
          {/* left side form */}
          <div className="lg:w-1/2 h-full ">
            <form className="space-y-6">
              {/* name  */}
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-semibold pl-4 text-xl">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="p-4 border-2 border-gray-200 rounded-xl"
                />
              </div>
              {/* telephone  */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="telephone"
                  className="font-semibold pl-4 text-xl"
                >
                  Telephone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="+00151241131"
                  className="p-4 border-2 border-gray-200 rounded-xl"
                />
              </div>

              {/* email  */}
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="font-semibold pl-4 text-xl">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  className="p-4 border-2 border-gray-200 rounded-xl"
                />
              </div>
              {/* message  */}
              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="font-semibold pl-4 text-xl">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  className="p-4 border-2 border-gray-200 rounded-xl outline-none"
                ></textarea>
              </div>
              <button className="py-4 bg-primary text-white w-full rounded-xl">
                Send
              </button>
            </form>
          </div>
          {/* right side form */}
          <div className="lg:w-1/2 h-full">
            <h1 className="uppercase text-3xl lg:text-4xl  font-semibold">
              how to find us
            </h1>
            <div className="pt-10 space-y-16">
              <div className="flex items-center gap-10">
                <Icon
                  className="text-4xl text-primary"
                  icon="fluent:call-16-filled"
                />
                <spanc>
                  <h2 className="uppercase text-2xl font-semibold">
                    telephone
                  </h2>
                  <h2 className="font-light">+15852826375</h2>
                </spanc>
              </div>
              <div className="flex items-center gap-10">
                <Icon className="text-4xl text-primary" icon="mdi:location" />
                <spanc>
                  <h2 className="uppercase text-2xl font-semibold">
                    legal location
                  </h2>
                  <h2 className="font-light">4642 Auerbach Ave</h2>
                </spanc>
              </div>
              <div className="flex items-center gap-10">
                <Icon className="text-4xl text-primary" icon="ic:round-email" />
                <spanc>
                  <h2 className="uppercase text-2xl font-semibold">email</h2>
                  <h2 className="font-light">support@qeeq.com</h2>
                </spanc>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
