import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem
                date={props.items[0].date}
                price={props.items[0].price}
                title={props.items[0].title}
            ></ExpenseItem>
            <ExpenseItem
                date={props.items[1].date}
                price={props.items[1].price}
                title={props.items[1].title}
            ></ExpenseItem>
        </Card>
    );
};
export default Expenses;
