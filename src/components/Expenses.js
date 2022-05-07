import "./Expenses.css";
import ExpenseItem from "../components/ExpenseItem";
import Card from "../components/Card";
function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                date={props.items[0].date}
                price={props.items[0].price}
            ></ExpenseItem>
            <ExpenseItem
                date={props.items[1].date}
                price={props.items[1].price}
            ></ExpenseItem>
        </Card>
    );
}
export default Expenses;
