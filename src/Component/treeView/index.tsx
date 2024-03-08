import "./style.css"
import menus from "./data"
import { useState } from "react"

export default function index() {
    const [open,setOpen]=useState([''])

    const handleClick=(id:string)=>{
         setOpen((prev)=>open.find((m)=>m===id)?[...prev.filter((m)=>m !==id)]:[...prev,id])
    }
  return (
    <div className="menu">
       {menus?.map((menu)=>{
        return(
            <div>
                <h1 key={menu.to} className="home">{menu.label}{menu.children&&<span onClick={()=>handleClick(menu.to)} className="add">{open.find((m)=>m===menu.to)?("-"):("+")}</span>}</h1> 
                {menu.children&&open.find((m)=>m===menu.to)?(<div>
                    {
                       menu.children?.map((cmenu)=>{
                        return(
                            <div>
                                  <h1   key={cmenu.to}   className="chome">{cmenu.label}{cmenu.children&&<span onClick={()=>handleClick(cmenu.to)} className="add">{open.find((m)=>m===cmenu.to)?("-"):("+")}</span>}</h1>
                                  {cmenu.children&&open.find((m)=>m===cmenu.to)?(<div>
                    {
                       cmenu.children?.map((ccmenu)=>{
                        return(
                            <div>
                                  <h1 key={ccmenu.to} className="cchome">{ccmenu.label}{ccmenu.children&&<span onClick={()=>handleClick(ccmenu.to)} className="add">{open.find((m)=>m===ccmenu.to)?("-"):("+")}</span>}</h1>
                                  {menu.children&&open.find((m)=>m===ccmenu.to)?(<div>
                    {
                       ccmenu.children?.map((cccmenu)=>{
                        return(
                            <div>
                                  <h1 key={cccmenu.to} className="ccchome">{cccmenu.label}</h1>
                                  
                            </div>
                        )
                       })
                    }  
                </div>):null}
                                  
                            </div>
                        )
                       })
                    }  
                </div>):null}
                                  
                            </div>
                        )
                       })
                    }  
                </div>):null}
            </div>
        )
       })}
    </div>
  )
}
