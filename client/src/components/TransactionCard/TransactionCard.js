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
      <span className='date'>
        {new Date(createdAt).toLocaleString()}
      </span>

      <span className='category'>
        {category}
      </span>

        <span className='amount' style={{color: type === "credit" ? "green" : "red"}}>

          {type === "credit" ? "+" : "-"}
            {amount}
        </span>
        {/* <img src={ImgDelete} alt="" className='delete-icon' onClick={deleteTransaction} /> */}
        <div class="wrap-delete"><button class="button-delete" onClick={deleteTransaction}><span class='text'>Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></span></button></div>
        <Toaster/>
    </div>
  )
}

export default TransactionCard