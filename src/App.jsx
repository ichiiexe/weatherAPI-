import { useState, useEffect } from "react";
import Header from "./components/Header";
import Day from "./components/main/day";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(true);

  useEffect(() => {
    axios
      .get
      // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Athens?key=S48BZGXL26MK2UURT4QKZ46NT"
      ()
      .then((res) => {
        setItems(res.data);
        setDataIsLoaded(true);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="h-[60dvh] p-20">
        {dataIsLoaded ? (
          <Day
            // up={items.days[0].tempmax}
            // down={items.days[0].tempmin}
            // main={items.currentConditions.temp}
            // icon={icon}
            up="50"
            down="30"
            main="40"
          />
        ) : (
          <h1>wait..</h1>
        )}
      </div>
    </>
  );
}

export default App;
