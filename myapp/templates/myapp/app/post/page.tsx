"use client"
import { useEffect } from "react";
import NavBar from "../components/navbar";
import axios from "axios";

const Post: React.FC = () =>{
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const title = (document.getElementById("title") as HTMLElement).value;
        const profileUrl = (document.getElementById("profile_url") as HTMLElement).value;
        const imageUrl = (document.getElementById("image_url") as HTMLElement).value;
        const content = (document.getElementById("content") as HTMLElement).value;
    
        const data ={
            title: title,
            content: content,
            profile_url: profileUrl,
            image_url: imageUrl
        }
        try{
            axios.post("http://192.168.137.75:8000/blog/api/posts/",data);
            window.location.href="/";
        }catch(e){
            console.log(e);
        }
        
    }
    
    return(
        <div className="w-full">
            <NavBar/>
            <form className="w-full h-[100vh] flex flex-col   items-center justify-center gap-[20px]" onSubmit={handleSubmit}>
                <h1 className="font-semibold text-[2em]">Post a Blog</h1>
                <div className="w-1/3 flex flex-col items-center gap-[20px] shadow-[#7E51FF] shadow-lg bg-[rgba(255,255,255,0.5)] p-3 rounded-[10px] shadow-lg shadow-[#7E51FF]">
                    <div className="w-full flex flex-col gap-[10px]">
                        <div>
                            <input type="text" id="title" placeholder="Enter title" className="w-full border-1 border-[#eee] p-1 rounded-[6px] text-center"/>
                            <div className="border"></div>
                        </div>
                        <div>
                            <input type="text" id="profile_url" placeholder="Enter your profile image url" className="w-full border-1 border-[#eee] p-1 rounded-[6px] text-center"/>
                            <div className="border"></div>
                        </div>
                        <div>
                            <input type="text" id="image_url" placeholder="Enter Your blog image url" className="w-full border-1 border-[#eee] p-1 rounded-[6px] text-center"/>
                            <div className="border"></div>
                        </div>
                        <div>
                            <textarea title="content" id="content" placeholder="Enter your blog here" className="w-full rounded-[6px] h-[200px] p-1"/>
                            <div className="border"></div>
                        </div>
                        
                    </div>
                </div>
                <button className="w-1/3 bg-[#7E51FF] p-2 rounded-[10px] hover:bg-[#6745c6]" id="post-btn" type="submit">Post</button>
            </form>
        </div> 
    )
}

export default Post;