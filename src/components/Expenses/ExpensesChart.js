import Chart from "../Chart/Chart";

//returns array of months using Intl API
function creatDate(i) {
  return new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
    new Date(`2021-${i + 1}-2`)
  );
}
let months = Array.from({ length: 12 }).map((_, i) => creatDate(i));

function ExpensesChart(props) {
  const { expenses } = props;
  //Create 12 lenth array and map months into it
  const chartDataPoints = months.map((mon) => {
    return { label: mon, value: 0 };
  });

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
