import Card from "../Card";
import Today from "../main/Today";
import Tomorrow from "../main/Tomorrow";

function Day(props) {
  return (
    <div className="max-w-7xl grid grid-cols-3 gap-10 md:grid-cols-2">
      <div className="row-span-2 col-span-2 text-center">
        <Card>
          <div id="cardHeader ">
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
        <Tomorrow tomIcon={props.tomIcon} tomTemp={props.tomTemp} />
      </div>
    </div>
  );
}

export default Day;
