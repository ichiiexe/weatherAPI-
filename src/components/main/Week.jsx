import Card from "../Card";
import { motion } from "framer-motion";

function Week(props) {
  const myArray = props.array;

  return (
    <div className="w-[clamp(100%, 50%, 100%)] flex gap-2 items-center justify-center relative">
      <h1 className="backgroundText absolute text-[10rem] opacity-15 tracking-widest">
        7-Day Forecast
      </h1>
      {myArray.slice(0, 7).map((item, index) => {
        console.log(item.datetime.split("-"));
        const date = item.datetime.split("-");

        return (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index / 3 }}
          >
            <h2>{date[1] + "/" + date[2]}</h2>
            <Card key={index}>
              <img
                className="max-w-20"
                src={"./WeatherPack/" + item.icon + ".png"}
              />
              <h2>{item.temp}</h2>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Week;
