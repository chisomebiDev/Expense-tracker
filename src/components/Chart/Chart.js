import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const data = props.dataPoints;
  // const chartDataPoints = months.map((mon) => {
  //   return { label: mon, value: 0 };
  // });
  const dataPointValues = data.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {data.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
