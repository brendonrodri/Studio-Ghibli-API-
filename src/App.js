import React from "react"
import Api from "./components/api"
import NavBar from "./components/navbar"
import "./App.css"
export default function App (){
  return(
    <>
      {NavBar()}
      {Api()}
      
    </>
  )
}