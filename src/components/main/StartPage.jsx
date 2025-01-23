import { useEffect, useState } from "react";
import Card from "../Card";
import Arrow1 from "/arrows/Vector-3.png";
import Arrow2 from "/arrows/Vector-2.png";

function StartPage({ setCity }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCity(text);
  }

  return (
    <div className="max-w-5xl flex flex-col text-center lg:max-w-2xl sm:max-w-lg xsm:max-w-80">
      <div className="h-96 mb-auto">
        <h4>
          Weatherizt offers simple, reliable weather updates at your fingertips.
          Get accurate forecasts and easy-to-read visuals—without the clutter.
        </h4>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <input
            className="h-full w-3/4 m-2 bg-transparent text-center focus:outline-none text-3xl"
            placeholder="City"
            value={text}
            onChange={handleChange}
          />
        </form>

        <div className="absolute -top-20 -left-40">
          <h1 className="backgroundText">Search City</h1>
          <img
            className="absolute -top-10 left-60 rotate-12"
            src={Arrow1}
            alt="arrow pointing input"
          />
          <img
            className="absolute right-20 rotate-45 -z-50 opacity-55"
            src={Arrow2}
            alt="arrow pointing input"
          />
        </div>
      </Card>
    </div>
  );
}
export default StartPage;

<div className="absolute right-[22rem] -top-16">
  <h1 className="backgroundText">Search</h1>
  <img
    className="absolute top-16 -right-36 rotate-45"
    src="/arrows/Vector-3.png"
    alt="arrow pointing input"
  />
  <img
    className="absolute top-16 -left-36 rotate-90"
    src="/arrows/Vector-1.png"
    alt="arrow pointing input"
  />
</div>;
