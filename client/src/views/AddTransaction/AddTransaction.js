import axios from 'axios'
import React, { useState, useEffect } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import "./AddTransaction.css"

function AddTransaction() {

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')


    useEffect(()=>{
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    
        if(currentUser){
          setUser(currentUser)
        }
    
        if(!currentUser){
          window.location.href = "/login"
        }
      },[])

      const addTransaction = async ()=>{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/transaction`,{
            user: user._id,
            title,
            amount,
            category,
            type
        })

        if(response.data.success === false){
          toast.error("Failed to add transaction")
        }
        else{
          toast.success("Transaction Added Successfully")
        }

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('')

        setTimeout(() => {
            window.location.href = "/"
        }, 1000);
      }


  return (
    <div>
        <h1 className=''>Hey👋,{user.fullName}</h1>
        <h3 className='h3'>Add Your Transactions Here!!</h3>
        <h2 className='heading'>Add Transaction</h2>
        <form action="" className='auth-form'>
            <input
            type="text"
            placeholder="Title"
            className="user-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input
            type="number"
            placeholder="Amount"
            className="user-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />

            <select className='user-input'
            value={type}
            onChange = {(e)=> setType(e.target.value)}
            >
                <option value="credit">Income</option>
                <option value="debit">Expense</option>
            </select>

            <select name="" id="" className='user-input' value={category}
            onChange = {(e)=> setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="groceries">Groceries</option>
                <option value="Food">Food</option>
                <option value="entertainment">Entertainment</option>
                <option value="transportation">Transportation</option>
                <option value="shopping">Shopping</option>
                <option value=" utilities">Utilities</option>
                <option value="savings">Savings</option>
                <option value="investments">Investments</option>
                <option value="rent">Rent</option>
                <option value="salary">Salary</option>
                <option value="miscellaneous">Miscellaneous</option>
                <option value="charity">Charity</option>
                <option value="pet">Pet</option>
                <option value="travel">Travel</option>
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="family">Family</option>
                <option value="holidays">Holidays</option>
                <option value="debt">Debt</option>
                <option value="loan">Loan</option>
                <option value="loan repayment">Loan Repayment</option>
                <option value="gift">Gift</option>
                <option value="donation">Donation</option>
                <option value="travel">Travel</option>
                <option value="learning">Learning</option>
                <option value="other">Other</option>
            </select>

            <button type="button" className='btn' onClick={addTransaction}>Add Transaction</button>
        </form>
        <Toaster />
    </div>
  )
}

export default AddTransaction