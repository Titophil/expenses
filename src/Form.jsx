import React, {useState} from "react";

function Form( {onAddExpense} ){
    const[expenseName,setExpenseName]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("")
    const[amount,setAmount]=useState("")
    const[date,setDate]=useState("")
   
    


const handleSubmit=(event)=>{
    event.preventDefault()

    const newExpense = {
        name:expenseName,
        description,
        category,
        amount:parseFloat(amount),
        date: new Date(date).toLocaleDateString()
    }

        onAddExpense(newExpense)

        setExpenseName("")
        setAmount("")
        setDate("")
        setDescription("")
        setCategory("")
}
return(
    <div className = "card">
    <form className="expenseForm" onSubmit={handleSubmit}>
        <h3>Handle Expense</h3>
        <p>Enter your expense details below</p>
        <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e)=> setExpenseName(e.target.value)}
        />
        <input 
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <input
        type="text"
        placeholder="Enter expense Category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        />
        <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />
        <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        />
        <button style={{ backgroundColor:"black",  color: "white"}} type="submit">Submit</button>
    </form>
    </div>
)
}

export default Form
