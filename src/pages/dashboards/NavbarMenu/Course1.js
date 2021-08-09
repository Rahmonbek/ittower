import React,{useState,useEffect} from "react";
import Bosh from '../pages/Bosh';

import Course from "../pages/Course";

export default function Course1() {
    const [isContact, setIsContact]=useState(true)
    useEffect(() =>{ 
        setTimeout(()=>{
        setIsContact(false);
      }, 2500);
      })
    return (
        <div>
      {
            isContact==true?
            <Bosh/>:
            
            <Course/>  
          

      }               
        </div>
    )
}
