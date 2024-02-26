import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const MainCard: React.FC = () =>{
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get("http://172.16.60.61:8000/blog/api/posts/")
        .then(response=>{
            setBlogs(response.data)
        });
    },[]);
    return(
        <div className="w-full flex flex-row">
            <div className="w-full flex flex-col items-center justify-center">
                <Cards Items={blogs}/>
            </div>
        </div>
    )
}

export default MainCard;