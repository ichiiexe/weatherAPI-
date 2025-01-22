import Card from "../Card";

function Day(props) {
  return (
    <div className="max-w-screen-md h-96 m-auto grid grid-cols-3 gap-4 text-center lg:grid-cols-2">
      <div className="row-span-2 col-span-2">
        <Card>
          <img src="/public/WeatherPack/clear-day.png" />
          <h1 className="text-black">{props.main}</h1>
          <div>
            <h2>{props.up}</h2>
            <h2>{props.down}</h2>
          </div>
        </Card>
      </div>
      <div>
        <Card>2</Card>
      </div>
      <div>
        <Card>3</Card>
      </div>
    </div>
  );
}

export default Day;
