import Card from "../Card";
import Arrow from "/arrows/Vector-4.png";

function Tomorrow(props) {
  return (
    <Card>
      <h1 className="backgroundText absolute -z-10 -top-20 -right-96 text-[5rem] md:top-full md:right-1/3">
        Tomorrow..
        <img
          className="rotate-90 absolute top-0 right-36 md:rotate-180 md:-right-20"
          src={Arrow}
        />
      </h1>
      <div className="flex flex-row justify-between items-center w-full md:flex-col">
        <img
          className="max-w-40"
          src={"./WeatherPack/" + props.tomIcon + ".png"}
        />
        <div className="flex flex-col items-center">
          <h1 className="w-full text-center">{props.tomTemp}°</h1>
          <div className="flex flex-col">
            <h4>H: {props.tomUp}°</h4>
            <h4>L: {props.tomDown}°</h4>
          </div>
        </div>
      </div>

      <footer>{props.tomDesc}</footer>
    </Card>
  );
}

export default Tomorrow;
