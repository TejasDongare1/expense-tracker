import React from 'react'
import "./TransactionCard.css"
import ImgDelete from "./delete.png"
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

function TransactionCard({_id, title, amount, category, type, createdAt, loadTransactions}) {

  const deleteTransaction = async ()=>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/transaction/${_id}`)

    toast.success(response.data.message)
    

    loadTransactions()
  }

  return (
    <div className='transaction-card'>
        <h1 className='title'>{title}</h1>
      <span>
        {new Date(createdAt).toLocaleString()}
      </span>

      <span className='category'>
        {category}
      </span>

        <span className='amount' style={{color: type === "credit" ? "green" : "red"}}>

          {type === "credit" ? "+" : "-"}
            {amount}
        </span>
        <img src={ImgDelete} alt="" srcset="" className='delete-icon' onClick={deleteTransaction} />
        <Toaster/>
    </div>
  )
}

export default TransactionCard