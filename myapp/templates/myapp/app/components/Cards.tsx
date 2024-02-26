import { useEffect, useState } from "react";
import Card from "./Card"
import axios from "axios";

interface CardProps{
    title: string;
    content: string;
    image_url: string;
    profile_url: string;
}
interface CardsProps{
    Items: CardProps[]
}
const Cards: React.FC<CardsProps> = ({Items}) =>{
    
    return(
        <div className="p-3 w-full items-center flex flex-col gap-[50px]">
            {Items.map((blog,index)=>(
                <Card title={blog.title} content={blog.content} image_url={blog.image_url} profile_url={blog.profile_url}/>
            ))}
        </div>
        
    )
}

export default Cards;