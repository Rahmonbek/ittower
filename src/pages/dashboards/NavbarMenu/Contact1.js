import React,{useState,useEffect} from "react";
import Bosh from '../pages/Bosh';
import Contact from "../pages/Contact";
import Loader from "./Loader";

export default function Contact1() {
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
          <Loader/> : 
    <Contact />
                  }            
        </div>
    )
}
