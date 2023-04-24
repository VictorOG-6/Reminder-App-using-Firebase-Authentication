import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}
function Reminder() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false,msg: '',type:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !date || !time){
      showAlert(true,'please enter a reminder, time and date','danger')
    }
    else if (name && isEditing){
      setList(list.map((item) => {
        if(item.id === editID){
          return {...item, title:name, date:date, time:time}
        }
        return item
      })
    )
      setName('')
      setDate('')
      setTime('')
      setIsEditing(false)
      setEditID('null')
      showAlert(true,'reminder edited','success')
    }else{
      const newItem = {id: new Date().getTime().toString(),title: name,date: date,time: time}
      setList([...list, newItem])
      setName('')
      setDate('')
      setTime('')
      showAlert(true,'reminder added to the list','success')
    }
  }

  const showAlert = (show= false, msg='',type='') => {
    setAlert({show,msg,type})
  }

  const clearList = () => {
    showAlert(true,'empty list','danger')
    setList([])
  }
  const removeItem = (id) => { 
    setList(list.filter((item) => 
      item.id !== id
    ))
    showAlert(true,'reminder removed','danger')
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
    setDate(specificItem.date)
    setTime(specificItem.time)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])
  return (
   <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>reminder list</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='Enter your Reminder' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="date" className='date' placeholder='Enter a date' value={date} onChange={(e) => setDate(e.target.value)}/>
        <input type="time" className='date' placeholder='Enter a Time' value={time} onChange={(e) => setTime(e.target.value)}/>
        <button className="submit-btn">{isEditing ? 'edit': 'submit'}</button>
      </div>
    </form>
    {list.length> 0 && (
    <div className="grocery-container">
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={clearList}>clear items</button>
    </div>
    )}
   </section>
  )
}

export default Reminder
