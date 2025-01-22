import Card from "../Card";

function Tomorrow(props) {
  return (
    <Card>
      <div className="flex flex-row justify-between items-center w-full">
        <img
          className="max-w-40"
          src={"/public/WeatherPack/" + props.tomIcon + ".png"}
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
