import { useState } from "react";
import { INITIAL_EXPENSES } from "./config";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </>
  );
}

export default App;
