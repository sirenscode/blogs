import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const MainCard: React.FC = () =>{
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get("http://172.16.60.160:8000/blog/api/posts/")
        .then(response=>{
            setBlogs(response.data)
        });
    },[]);
    return(
        <div className="w-full flex flex-row mt-[100px]">
            <div className="w-full flex flex-col items-center justify-center">
                <Cards Items={blogs}/>
            </div>
        </div>
    )
}

export default MainCard;