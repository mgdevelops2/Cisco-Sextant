import React, { useEffect, useState } from "react";

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    // Open a websocket to the Pylon endpoint
    const socket = new WebSocket("ws://localhost:55455");

    // When a message is received, calculate the packet latency
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      //   const packetTimestamp = data.timestamp;
      const currentTime = Date.now();
      const packetLatency = currentTime - data;
      setLatency(packetLatency);
    };
  }, []);

  return (
    <a
      class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
      href="#"
    >
      {latency ? <p>Packet latency: {latency}ms</p> : <p>Loading...</p>}
    </a>
  );
};

export default PacketLatency;
