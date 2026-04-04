"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const rawRes = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/message`,
        );
        const res = await rawRes.json();
        if (res.message) {
          console.log("Message recieved from the server", res.message);
          setMessage(res.message);
        } else {
          console.log("Did not get any message from the server.");
        }
      } catch (err) {
        console.error(
          `Error while fetching message from server ERROR : ${err}`,
        );
      }
    };
    fetchMessage();
  }, []);

  return (
    <main>
      <div>
        <h2>Message : </h2>
        <p>{message}</p>
      </div>
    </main>
  );
}
