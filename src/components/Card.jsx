import ListCard from "./ListCard";
import {MessageCircleHeart } from"lucide-react";
import { Info } from 'lucide-react';
import { MessageSquarePlus } from "lucide-react";


export default function Card()
{
    const data = [
    
    {
       id : 1,
       image:"/rae1.jpg" ,
       age : "20",
       name : "Ghibli",
       born : "Sumedang",
       address :"Medan",
       hobby : "Gym WithMe"
    },
    
    {
        id : 2,
        image:"/rae2.jpg" ,
        age : "17 yo",
        name : "Rae",
        born : "Isekai",
        address : "Cicendol",
        hobby : "Running"
    },

    {
       id : 3,
       image:"rae3.jpg" ,
       age : "15 yo",
       name : "Soekarno hatta",
       born : "Jatim",
       address : "Padalarang",
       hobby : "Cooking"
    }
]

    const showGreat=(Ghibli)=>{
        alert("selamat datang : "+Ghibli.name);
    }

    const showInfo = (Ghibli) => {
        alert("nama :"+Ghibli.name+"\nborn : "+Ghibli.born +"\nage :"+Ghibli.age +"\naddres :" +Ghibli.addres +"\nHobby :"+Ghibli.hobby)
    }

    const showComment =()=>{
        const input=window.prompt("Masukan Sesuatu :");
        if (input != null) {
            alert(`You input: ${input}`);
          }
        else{
            alert("comment is empty");
        }
    }

  return(
       <>
       <div className="Box"> 
        {
            data.map( (gibly) =>(
                <div className="Bingkai-Box">
                 <ListCard key={gibly.id} UiProps={gibly}/>
                 
                 <div className="Button">
                <button onClick={()=>showGreat(gibly)}><MessageCircleHeart/></button>
                <button onClick={()=>showInfo(gibly)}><Info /></button>
                <button onClick={()=>showComment(gibly)}><MessageSquarePlus/></button>
                 </div>
                </div>
            ))
        }
        
        </div>         
       </>
  )

}