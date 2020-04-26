import React from "react";
import { Articles, Menu } from "./components";
import "./tailwind.generated.css";

export function App() {
  return (
    <div className="lg:px-20 font-sans">
      <div className="mx-5">
        <Menu />
        <hr />
      </div>
      <Articles />
    </div>
  );
}

export default App;
