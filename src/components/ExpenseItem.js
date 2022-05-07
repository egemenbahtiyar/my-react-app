import "./ExpenseItem.css";
function ExpenseItem(props) {
    // let expenseDate = new Date(2022, 5, 7);
    // let expenseDescription = "Car Insurance";
    // let expensePrice = "198.67";
    return (
        <div className="expense-item">
            <div>
                <div>{props.title}</div>
                <div className="expense-item__description">
                    <h2>{props.amount}</h2>
                    <div className="expense-item__price">{props.price}</div>
                </div>
            </div>
        </div>
    );
}
export default ExpenseItem;
