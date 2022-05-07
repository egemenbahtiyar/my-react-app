import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../components/Card";
function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} />

                <div className="expense-item__description">
                    <h2>{props.amount}</h2>
                    <div className="expense-item__price">{props.price}</div>
                </div>
            </div>
        </Card>
    );
}
export default ExpenseItem;
