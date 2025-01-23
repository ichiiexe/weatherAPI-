import Card from "../Card";
import Vector from "/icons/Vector.png";
import Droplet from "/icons/droplet.png";
import Vector1 from "/icons/Vector-1.png";
import Vector2 from "/icons/Vector-2.png";
import Wind from "/icons/wind.png";
import Sun from "/icons/sun.png";

function Today(props) {
  return (
    <Card>
      <h1 className="backgroundText absolute -z-10 -top-20 text-[5rem]">
        Today..
      </h1>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src={Vector} />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Precipitation</h3>
          <h4>{props.rain} %</h4>
        </div>
      </div>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src={Droplet} />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Humidity</h3>
          <h4>{props.humid} %</h4>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <span className="rounded-full p-2 px-4 bg-[#ffffff]">
          <img src={Vector1} />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Feels Like</h3>
          <h4>{props.feels} °</h4>
        </div>
      </div>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-[.6rem] py-[.7rem] bg-[#ffffff]">
          <img src={Vector2} />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Visibility</h3>
          <h4>{props.visibility} </h4>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src={Wind} />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Wind</h3>
          <h4>{props.speed} km/h</h4>
        </div>
      </div>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src={Sun} />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">UV Index</h3>
          <h4>{props.uv} %</h4>
        </div>
      </div>
    </Card>
  );
}

export default Today;
