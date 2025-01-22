import { useState, useEffect } from "react";
import Header from "./components/Header";
import Day from "./components/main/day";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    axios
      .get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Athens?key=S48BZGXL26MK2UURT4QKZ46NT"
      )
      .then((res) => {
        setItems(res.data);
        setDataIsLoaded(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(items);
  return (
    <>
      <Header />
      <div className="h-[60dvh] flex justify-center items-center">
        {dataIsLoaded ? (
          <Day
            main={items.currentConditions.temp}
            up={items.days[0].tempmax}
            down={items.days[0].tempmin}
            rain={items.currentConditions.precip}
            humid={items.currentConditions.humidity}
            feels={items.currentConditions.feelslike}
            visibility={items.currentConditions.visibility}
            speed={items.currentConditions.windspeed}
            uv={items.currentConditions.uvindex}
            desc={items.description}
            condition={items.currentConditions.conditions}
            icon={items.currentConditions.icon}
            tomIcon={items.days[1].icon}
            tomTemp={items.days[1].temp}
          />
        ) : (
          <h1>wait..</h1>
        )}
      </div>
    </>
  );
}

export default App;
