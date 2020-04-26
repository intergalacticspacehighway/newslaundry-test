import React from "react";
import { randomImages } from "../services/utils";

export function Banner() {
  return (
    <div className="flex justify-center py-5">
      <img src={randomImages[0]} style={{ height: "300px" }} />
    </div>
  );
}

export default Banner;
