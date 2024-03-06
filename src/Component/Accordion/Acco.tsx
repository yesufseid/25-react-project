import data from"./data"
import { useState } from "react"


export default function Acco() {
    const [select,setSelect]=useState<string>()
    const [multi,setMulti]=useState(false)
    const [allSelect,setAllSelect]=useState(["m"])
    const handleMultiView=()=>{
        setMulti((prev)=>!prev)
        setSelect("")
        setAllSelect([])
    }
    const HandleClick=(id:string)=>{
          setSelect(select===id?"":id)
          setAllSelect((prev)=>prev.find((e)=>e===id)===id?[...prev.filter((e)=>e!==id)]:[...prev,id])}
  return (
    <div className="w-full  flex justify-center items-center mt-20">
        <div>
            <button
              onClick={()=>handleMultiView()}
            className="font-semibold text-2xl text-center w-full">  {multi?"Multi viwe":"single veiw"} </button>
        {
            data?.map((d)=>{
                return(
                    <>
                      <div className="w-96 bg-black text-white shadow-2xl my-5 flex-col space-y-3 rounded-md p-3" key={d.id}>
                         <p>{d.question}</p>
                         { multi?allSelect.some((s)=>s===d.id)&&<p>{d.answer}</p>:select===d.id&&<p>{d.answer}</p>}
                         <button 
                          onClick={()=>HandleClick(d.id)}
                         className="text-2xl rounded-full w-10 h-10 ml-80 hover:bg-slate-500">+</button>
                      </div>
                    </>
                )
            })
        }
        </div>
    </div>
  )
}
