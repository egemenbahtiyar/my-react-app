import ExpenseItem from "./components/ExpenseItem";
function App() {
    const dataList = [
        {
            id: 1,
            title: "Toilet paper",
            amount: 2,
            price: "$99",
            date: new Date("2022", "7", "20"),
        },
        {
            id: 2,
            title: "Book",
            amount: 2,
            price: "$20",
            date: new Date("2022", "4", "25"),
        },
    ];
    return (
        <div>
            <ExpenseItem date={dataList[0].date}></ExpenseItem>
            <ExpenseItem date={dataList[1].date}></ExpenseItem>
        </div>
    );
}

export default App;
