import Card from "../Card";

function Today(props) {
  return (
    <Card>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src="/public/icons/Vector.png" />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Precipitation</h3>
          <h4>{props.rain} %</h4>
        </div>
      </div>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src="/public/icons/droplet.png" />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Humidity</h3>
          <h4>{props.humid} %</h4>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <span className="rounded-full p-2 px-4 bg-[#ffffff]">
          <img src="/public/icons/Vector-1.png" />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Feels Like</h3>
          <h4>{props.feels} °</h4>
        </div>
      </div>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-[.6rem] py-[.7rem] bg-[#ffffff]">
          <img src="/public/icons/Vector-2.png" />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Visibility</h3>
          <h4>{props.visibility} </h4>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src="/public/icons/wind.png" />
        </span>
        <div>
          <h3 className="text-[#E3E5E5] opacity-50">Wind</h3>
          <h4>{props.speed} km/h</h4>
        </div>
      </div>
      <div className="w-full flex  items-center gap-4">
        <span className="rounded-full p-2 bg-[#ffffff]">
          <img src="/public/icons/sun.png" />
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
