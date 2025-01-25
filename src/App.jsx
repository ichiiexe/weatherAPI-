import { useState, useEffect } from "react";
import Header from "./components/Header";
import Day from "./components/main/day";
import axios from "axios";
import StartPage from "./components/main/StartPage";
import Week from "./components/main/Week";

function App() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [city, setCity] = useState("");

  async function fetchCity(city) {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=S48BZGXL26MK2UURT4QKZ46NT`
      )
      .then((res) => {
        try {
          setItems(res.data);
          setDataIsLoaded(true);
        } catch {
          console.log("bruh");
          setDataIsLoaded(false);
        }
      });
  }
  useEffect(() => {
    if (city != "") {
      fetchCity(city);
    }
  }, [city]);

  console.log(city);
  console.log(items);

  return (
    <>
      <Header />
      <div className="h-100dvh md:h-dvh md:w-full flex flex-col justify-center items-center ">
        {city != 0 && dataIsLoaded ? (
          <>
            <Day
              handleSubmit={(city) => setCity(city)}
              city={city}
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
              tomUp={items.days[1].tempmax}
              tomDown={items.days[1].tempmin}
              week={items.days}
            />
          </>
        ) : (
          <div className="md:h-dvh">
            <StartPage setCity={(newCity) => setCity(newCity)} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
