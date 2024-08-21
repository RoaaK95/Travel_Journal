import { useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from '../data'
import '../style.css'

  function App() {
  
    const cards = data.map(item => {
      return(
        <Card
        {...item} 
        />
      )
    })
  return (
    <> 
    <Navbar />
    <section className='cards--list'>
      {cards}
    </section>
    </>
  )
    
}
 
export default App 