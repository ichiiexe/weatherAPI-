import Card from "../Card";
import Today from "./Today";
import Tomorrow from "./Tomorrow";
import Week from "./Week";
import Arrow1 from "/arrows/Vector-3.png";
import Arrow2 from "/arrows/Vector-2.png";
import { useState } from "react";

function Day(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(text);
  }
  return (
    <>
      <div className="max-w-7xl grid grid-cols-3 gap-10 md:grid-cols-2">
        <div className="row-span-2 col-span-2 text-center relative">
          <Card>
            <div id="cardHeader flex justify-center">
              <form onSubmit={handleSubmit}>
                <input
                  className="h-full max-w-3/5 m-2 bg-transparent text-center focus:outline-none"
                  placeholder={`${props.city}`}
                  type="text"
                  value={text}
                  onChange={handleChange}
                />
              </form>
              <h5 className="m-2">Saturday, whatever | 25:00 AM</h5>
              <div className="absolute right-[22rem] -top-16">
                <h1 className="backgroundText">Search</h1>
                <img
                  className="absolute top-16 -right-36 rotate-45"
                  src={Arrow1}
                  alt="arrow pointing input"
                />
                <img
                  className="absolute top-16 -left-36 rotate-90"
                  src={Arrow2}
                  alt="arrow pointing input"
                />
              </div>
            </div>
            <div
              id="cardInfo"
              className="w-full flex justify-around gap-10 items-center p-10 m-5"
            >
              <div className="flex-1 flex flex-col items-center">
                <img src={"./WeatherPack/" + props.icon + ".png"} />
                <p>{props.condition}</p>
              </div>

              <div className="flex-1 flex flex-col items-center gap-10">
                <h1 className="text-9xl font-medium">{props.main}°</h1>
                <div className="flex justify-between w-full">
                  <h2>High: {props.up}°</h2>
                  <h2>Low: {props.down}°</h2>
                </div>
              </div>
            </div>

            <footer>{props.desc}</footer>
          </Card>
        </div>
        <div>
          <Today
            rain={props.rain}
            humid={props.humid}
            feels={props.feels}
            visibility={props.visibility}
            speed={props.speed}
            uv={props.uv}
          />
        </div>
        <div>
          <Tomorrow
            tomIcon={props.tomIcon}
            tomTemp={props.tomTemp}
            tomUp={props.tomUp}
            tomDown={props.tomDown}
            tomDesc={props.tomDesc}
          />
        </div>
        <div className="col-span-3">
          <Week array={props.week} />
        </div>
      </div>
    </>
  );
}

export default Day;
