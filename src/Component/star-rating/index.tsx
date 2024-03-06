import { CiStar } from "react-icons/ci";
import { useState } from "react";
const star=[1,2,3,4,5]


export default function index() {
  const [rate ,setRate]=useState([0])
  const [hover ,setHover]=useState([0])

  const handleRate=(id:number)=>{
    for(let i=0; i<id; i++){
        setRate((prev)=>[...prev,i+1])
    }  
  }
  const handleHover=(id:number)=>{
    for(let i=0; i<id; i++){
        setHover((prev)=>[...prev,i+1])
    } 

  }


  return (
    <div className="flex gap-2 w-full justify-center my-20">
        {
            star?.map((s)=>{
              return(
                <>
                <CiStar
                 onMouseEnter={()=>handleHover(s)}
                 onMouseLeave={()=>setHover([])}
                key={s} onClick={()=>handleRate(s)} 
                className={`${rate.find((r)=>r===s)===s&&"text-yellow-300"} text-2xl ${hover.find((r)=>r===s)===s&&"text-yellow-300"}`} />
                </>
              )  
            })
        }
    </div>
  )
}
