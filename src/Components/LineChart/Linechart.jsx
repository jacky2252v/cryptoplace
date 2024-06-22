import Chart from "react-google-charts";
import { useEffect, useState } from "react";

export const Linechart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData.prices]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      width="100%"
      height="100%"
      legendToggle
    />
  );
};

export default Linechart;
