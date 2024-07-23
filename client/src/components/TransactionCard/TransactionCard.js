import React from 'react'
import "./TransactionCard.css"

function TransactionCard({_id, title, amount, category, type, createdAt}) {
  return (
    <div className='transaction-card'>
        <h1 className='title'>{title}</h1>

        <span className='amount'>
            {amount}
        </span>
    </div>
  )
}

export default TransactionCard