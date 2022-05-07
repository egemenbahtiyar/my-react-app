import "./Expenses.css";
import ExpenseItem from "../components/ExpenseItem";
function Expenses(props) {
    return (
        <div>
            <ExpenseItem
                date={props.items[0].date}
                price={props.items[0].price}
            ></ExpenseItem>
            <ExpenseItem
                date={props.items[1].date}
                price={props.items[1].price}
            ></ExpenseItem>
        </div>
    );
}
export default Expenses;
