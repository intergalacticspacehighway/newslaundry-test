import React from "react";
import { Articles, Menu, Banner } from "./components";
import "./tailwind.generated.css";
import "./components/placeholders.css";
import { useArticles } from "./services";

export function App() {
  const {
    state: { data, loading, error },
  } = useArticles();

  console.log("data ", data);
  return (
    <div className="font-sans">
      <div className="mx-5 lg:px-20 ">
        <Menu />
        <hr />
      </div>
      <Banner coverNews={data.items[0]} />
      <div className="lg:px-20 md:px-10 sm:px-5 xs:px-5 px-5">
        <Articles data={data} />
      </div>
    </div>
  );
}

export default App;
