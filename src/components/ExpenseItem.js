import "./ExpenseItem.css";
function ExpenseItem() {
    let expenseDate = new Date(2022, 5, 7);
    let expenseDescription = "Car Insurance";
    let expensePrice = "198.67";
    return (
        <div className="expense-item">
            <div>
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseDescription}</h2>
                    <div className="expense-item__price">${expensePrice}</div>
                </div>
            </div>
        </div>
    );
}
export default ExpenseItem;
