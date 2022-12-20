import React, { useState, useEffect } from "react";

function App({ ipVersion }) {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const apiUrl =
      ipVersion === "ipv4"
        ? "https://api.ipify.org?format=json"
        : "https://api6.ipify.org?format=json";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch((error) => console.error(error));
  }, []);

  return (
    <a
      class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/10 hover:shadow-indigo-500/10"
      href="#"
    >
      <h2 class="mt-4 text-xl font-bold text-white">Your IP address is:</h2>
      <p>{ip}</p>
    </a>
  );
}

export default App;
