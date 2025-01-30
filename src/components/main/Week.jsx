import Card from "../Card";

function Week(props) {
  const myArray = props.array;

  console.log(myArray);

  return (
    <div className="flex gap-2 overflow-hidden">
      {myArray.slice(0, 7).map((item, index) => {
        return (
          <Card key={index}>
            <img
              className="max-w-20"
              src={"./WeatherPack/" + item.icon + ".png"}
            />
            <h2>{item.temp}</h2>
          </Card>
        );
      })}
    </div>
  );
}

export default Week;
