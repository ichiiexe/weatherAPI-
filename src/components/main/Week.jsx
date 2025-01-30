import Card from "../Card";

function Week(props) {
  const myArray = props.array;

  return (
    <div className="w-full flex gap-2 items-center justify-center">
      {myArray.slice(0, 7).map((item, index) => {
        console.log(item.datetime.split("-"));
        const date = item.datetime.split("-");

        return (
          <div className="flex flex-col items-center">
            <h2>{date[1] + "/" + date[2]}</h2>
            <Card key={index}>
              <img
                className="max-w-20"
                src={"./WeatherPack/" + item.icon + ".png"}
              />
              <h2>{item.temp}</h2>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Week;
