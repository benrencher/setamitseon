import { useState } from 'react'
import './App.css'
import "./components/Grouping/Grouping"
import Grouping from './components/Grouping/Grouping'

function App() {
  return (
    <>
      <h1>Setamitseon</h1>
      <div className="Groupings">
        <Grouping title="Planning" />
        <div className="divider"/>
        <Grouping title="To do" />
        <div className="divider"/>
        <Grouping title="Done" />
      </div>
    </>
  )
}

export default App
