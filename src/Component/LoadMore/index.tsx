import { useState,useMemo } from "react"
    


type Datapeops={
    id:number
    title:string
    description:string
    price:number
    discountPercentage:number
    rating:number
    stock:number
    thumbnail:string
}
export default function index() {
    const [data,setData]=useState<any>([])
    // const [load,setLoade]=useState(0)

const fethc=async()=>{
    try {
        const res=await fetch(`https://dummyjson.com/products?limit=3`) 
        const data=await res.json()
        if(data){
            setData((prev:any)=>[...prev,...data.products] )
            console.log(data.products);
            
        }
    } catch (error) {
       console.log(error);
        
    }
}

useMemo(()=>{
  fethc()
},[])
//  console.log(data);
 

  return (
    <div className="w-full h-auto">
        <div className="grid grid-cols-3 gap-5 mx-10">
            {data?.map((d:Datapeops)=>{
                return(
                    <div key={d.id} className="border-2 border-pink-600 drop-shadow-2xl ">
                        <h1 className="">{d.title}</h1>
                        <img src={d.thumbnail} alt="Image" className="h-56" />
                        <p className="">{d.description}</p>
                        <div className="flex justify-between">
                             <button className="w-16 h-16 rounded-full border-red-800 ">{d.price}</button>
                             <button className="w-16 h-16 rounded-full border-red-800 ">{d.rating}</button>
                             <button className="w-16 h-16 rounded-full border-red-800 ">{d.stock}</button>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="w-full flex  justify-center my-10 ">
       <button onClick={()=>fethc()} className="text-sky-600 border-2 border-yellow-200 hover:bg-yellow-200 rounded-md px-2 py-1 ">Loade More </button>
       </div>
    </div>
  )
}
