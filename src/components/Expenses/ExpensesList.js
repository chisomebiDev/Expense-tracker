import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  //From Expenses.js
  const filteredExpenses = props.expense;

  if (filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  else
    return (
      <ul className="expenses-list">
        {filteredExpenses.map((expense) => (
          <ExpenseItem cost={expense} name={expense.title} key={expense.id} />
        ))}
      </ul>
    );
}

export default ExpensesList;
