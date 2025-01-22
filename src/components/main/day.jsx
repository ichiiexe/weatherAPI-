import Card from "../Card";

function Day(props) {
  return (
    <div className="max-w-7xl text-center grid grid-cols-3 gap-10 md:grid-cols-2">
      <div className="row-span-2 col-span-2">
        <Card>
          <div id="cardHeader">
            <h1>Athens</h1>
            <h5 className="">Saturday, whatever | 25:00 AM</h5>
          </div>
          <div
            id="cardInfo"
            className="w-full flex justify-around gap-10 items-center p-10 m-5"
          >
            <div className="flex-1 flex flex-col items-center">
              <img src={"/public/WeatherPack/" + props.icon + ".png"} />
              <p>{props.condition}</p>
            </div>

            <div className="flex-1 flex flex-col items-center gap-10">
              <h1 className="text-9xl font-medium">{props.main}°</h1>
              <div className="flex justify-evenly w-full">
                <h2>{props.up}°</h2>
                <h2>{props.down}°</h2>
              </div>
            </div>
          </div>

          <footer>{props.desc}</footer>
        </Card>
      </div>
      <div>
        <Card>
          <h2 className="w-full flex  items-center gap-4">
            <span className="rounded-full p-2 bg-[#ffffff]">
              <img src="/public/icons/Vector.png" />
            </span>
            {props.rain} %
          </h2>
          <h2 className="w-full flex items-center gap-4">
            <span className="rounded-full p-2 bg-[#ffffff]">
              <img src="/public/icons/droplet.png" />
            </span>
            {props.humid} %
          </h2>
          <h2 className="w-full flex items-center gap-4">
            <span className="rounded-full p-2 px-4 bg-[#ffffff]">
              <img src="/public/icons/Vector-1.png" />
            </span>
            {props.feels}°
          </h2>
          <h2 className="w-full flex items-center gap-4">
            <span className="rounded-full p-[.6rem] py-[.7rem] bg-[#ffffff]">
              <img src="/public/icons/Vector-2.png" />
            </span>
            {props.visibility}
          </h2>
          <h2 className="w-full flex items-center gap-4">
            <span className="rounded-full p-2 bg-[#ffffff]">
              <img src="/public/icons/wind.png" />
            </span>
            {props.speed} km/h
          </h2>
          <h2 className="w-full flex items-center gap-4">
            <span className="rounded-full p-2 bg-[#ffffff]">
              <img src="/public/icons/sun.png" />
            </span>
            {props.uv} UV Index
          </h2>
        </Card>
      </div>
      <div>
        <Card>3</Card>
      </div>
    </div>
  );
}

export default Day;
