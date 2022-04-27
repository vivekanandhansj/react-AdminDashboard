import React from 'react'
import { useParams } from "react-router-dom";

function UserView() {
    let params= useParams()
  return (
    <>UserView{params.id}</>
  )
}

export default UserView