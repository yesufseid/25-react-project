import QRCode from "react-qr-code"
import { useState } from "react"
import "./style.css"

export default function index() {
    const [qr,setQr]=useState("")
    const [value ,setValue]=useState('')

    const handleClick=()=>{
        setValue(qr)
        setQr("")
    }
  return (
    <div>
        <h1 className="title">qr code genenater</h1>
        <input className="input" onChange={(e)=>setQr(e.target.value)} type="text"  value={qr} placeholder="inter your value here"/>
        <button disabled={value||qr===""?true:false} onClick={()=>handleClick()}>generate</button>
        <QRCode   id="qr-code" value={value}  size={400}  bgColor="#fff"/>
    </div>
  )
}
