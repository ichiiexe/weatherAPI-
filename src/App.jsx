import { useState, useEffect } from "react";
import Header from "./components/Header";
import Day from "./components/main/Day";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Athens?key=S48BZGXL26MK2UURT4QKZ46NT"
      )
      .then((res) => {
        setItems(res.data);
        setDataIsLoaded(true);
      });
  }, []);

  console.log(items);

  return (
    <>
      <Header />
      {dataIsLoaded ? (
        <Day
          up={items.days[0].tempmax}
          down={items.days[0].tempmin}
          main={items.currentConditions.temp}
        />
      ) : (
        <h1>wait..</h1>
      )}
    </>
  );
}

export default App;
