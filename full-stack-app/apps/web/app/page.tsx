"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.warn("Ran effect");
    const fetchMessage = async () => {
      try {
        const rawRes = await fetch("http://140.245.30.85:5000/api/message");
        const res = await rawRes.json();

        if (res.message) {
          console.log("Message fetched successfully, Message:", res.message);
          setMessage(res.message);
        }
      } catch (err) {
        console.error(
          "Error while fetching message from the server, Error:",
          err,
        );
      }
    };
    fetchMessage();
  }, []);
  return (
    <main className="min-h-screen w-screen flex items-center justify-center p-10">
      <div className="flex flex-col gap-3">
        <h2>Message :</h2>
        <h4>{message}</h4>
      </div>
    </main>
  );
}
