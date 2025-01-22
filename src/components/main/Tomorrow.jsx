import Card from "../Card";

function Tomorrow(props) {
  return (
    <Card>
      <div>
        <img src={"/public/WeatherPack/" + props.tomIcon + ".png"} />
        <h1>{props.tomTemp}</h1>
      </div>
    </Card>
  );
}

export default Tomorrow;
