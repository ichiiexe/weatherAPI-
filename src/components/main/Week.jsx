import Card from "../Card";

function Week(props) {
  const myArray = props.array;

  console.log(myArray);

  return (
    <div className="flex gap-2 overflow-hidden">
      {myArray.slice(0, 6).map((item, index) => {
        return (
          <Card>
            <h1 key={index}>{item.temp}</h1>
          </Card>
        );
      })}
    </div>
  );
}

export default Week;
