import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Layout/Header'

const PrivateComp = () => {
  return (
    <div>
        <Outlet/>
        
      
    </div>
  )
}

export default PrivateComp
