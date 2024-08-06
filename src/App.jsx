import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'
import Footer from './components/Footer'

function App() {


  return (
    <div style={{display:'flex', flexDirection:'column', jus:'center', alignItems:'center'}}>
        <Currency />
        <Footer />
    </div>
  )
}

export default App
