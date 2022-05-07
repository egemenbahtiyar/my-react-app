import "./ExpenseItem.css";
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>
                <div>March 28th 2021</div>
                <div className="expense-item__description">
                    <h2>Car Insurance</h2>
                    <div className="expense-item__price">198.67$</div>
                </div>
            </div>
        </div>
    );
}
export default ExpenseItem;
