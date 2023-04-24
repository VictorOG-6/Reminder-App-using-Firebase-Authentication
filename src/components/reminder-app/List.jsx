import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeItem,editItem}) => {
  return (
  <div className="grocery-list">
    {items.map((item) => {
      const {id,title,date,time} = item
      return(
        <article key={id} className="grocery-item">
          <p className="title">{title}</p>
          <p className='title'>{date}</p>
          <p className='title'>{time}</p>
          <div className="btn-container">
            <button type='button' className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit/>
            </button>
            <button type='button' className="delete-btn" onClick={() => removeItem(id)}>
              <FaTrash/>
            </button>
            <label className="check-label">
                    <input type="checkbox" className="check-input"/>
                </label>
          </div>
        </article>
      )
    })}
  </div>
  )
}

export default List
