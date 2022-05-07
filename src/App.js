import ExpenseItem from "./components/ExpenseItem";
function App() {
    const dataList = [
        {
            id: 1,
            title: "Toilet paper",
            amount: 2,
            price: "$99",
        },
        {
            id: 2,
            title: "Book",
            amount: 2,
            price: "$20",
        },
    ];
    return (
        <div>
            <ExpenseItem
                title={dataList[0].title}
                amount={dataList[0].amount}
                price={dataList[0].price}
            ></ExpenseItem>
            <ExpenseItem
                title={dataList[1].title}
                amount={dataList[1].amount}
                price={dataList[1].price}
            ></ExpenseItem>
        </div>
    );
}

export default App;
