import React from "react";
import Ipfetch from "./Ipfetch";
import Latency from "./Latency";

function Exhibit(props) {
  return (
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Network Dashboard </h2>
          <div class="mt-8 grid grid-cols-1 gap-8 ">
            <Ipfetch ipVersion="ipv4" />
            <Ipfetch />
            <Latency />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exhibit;
