import React from 'react'
import { useParams } from "react-router-dom"; 
function ViewProduct() {
    let params=useParams()
  return (
    <div>ViewProduct{params.id}</div>
  )
}

export default ViewProduct