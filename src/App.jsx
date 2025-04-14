import React, {useState, useEffect} from "react";
import Form from "./Form";
import "./App.css"
function App(){
  const[searchTerm,setSearchTerm]=useState("")
  const [expense, setExpenses] = useState([]);
  const addExpense = (expense)=>{
    setExpenses((prevExpenses)=>[...prevExpenses,expense])
  
    
  }
  useEffect(()=>{
    const savedExpenses=JSON.parse(localStorage.getItem("expenses")) ||
    []
    setExpenses(savedExpenses)
  },[])

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expense))
  }, [expense])
  

  const filteredExpenses = expense.filter((exp) =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase())||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteExpense =(index)=>{
    const updatedExpenses = expense.filter((_,i)=>i !== index)
    setExpenses(updatedExpenses)
  }

  const handleSort=(field)=>{
    const sortedExpenses = [...expense].sort((a,b)=>{
      if (field === "name") {
        return a.name.localeCompare(b.name);
      }
      if (field === "description") {
        return a.description.localeCompare(b.description);
      }
      
      if(field==="amount"){
        return a.amount-b.amount
      }
      if(field==="category"){
        return a.category.localeCompare(b.category)
      }
      if(field==="date"){
        return new Date(a.date)-new Date(b.date)
      }
      return 0
    })
    setExpenses(sortedExpenses)
  }

    return(
        <div className="App">
            <h1>Expense tracker</h1>
            <p>
            Start taking control of your expenses<br/>
            and start keeping record<br />
            Categorize and analyze your spending</p>
            <Form onAddExpense={addExpense}/>
              <>
              <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              className="search-input"
              >
              </input>

              <table className="expense-table">
                <thead>
                  <tr>
                  <th onClick={()=>handleSort("name")}>Expense</th>
                  <th onClick={()=>handleSort("description")}>Description</th>
                  <th onClick={()=>handleSort("amount")}>Amount</th>
                  <th onClick={()=>handleSort("category")}>Category</th>
                  <th onClick={()=>handleSort("date")}>Date</th>
                  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredExpenses.map((exp,index)=>(
                    <tr key={index}>
                      <td>{exp.name}</td>
                      <td>{exp.description}</td>
                      <td>{exp.amount.toFixed(2)}</td>
                      <td>{exp.category}</td>
                      <td>{exp.date}</td>
                      <td>                 
                      <button
                      onClick={() => deleteExpense(index)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      Delete
                    </button>
                    </td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
              </>
          

        </div>
          )
}


export default App