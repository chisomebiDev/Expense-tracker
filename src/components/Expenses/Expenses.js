import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expense;
  const [filteredYear, setFilteredYear] = useState("2021");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter((expense) => {
    return new Date(expense.date).getFullYear() === +filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expense={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
