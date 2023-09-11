import React, { useState, useEffect } from "react";
import styles from "../styles/myPersonalFile.module.css";

const MyPersonalFile = () => {
    const [name, setName] = useState("Tarek");

  return (
    <div className="border-4 rounded-2xl border-red-600 w-80 p-2 text-center mx-2">
      <p className="text-4xl">
        You clicked <span className="text-orange-500 font-bold">{name}</span>{" "}
      </p>
      <button
        className="text-2xl bg-red-500 border-2 rounded-2xl font-bold p-5"
        onClick={() => setName("Bikash")}
      >
        Bikash
      </button>
      <button
        className="text-2xl bg-red-500 border-2 rounded-2xl font-bold p-5"
        onClick={() => setName("Siam")}
      >
        Siam
      </button>
    </div>
  );
};

export default MyPersonalFile;
