import NavBar from "../components/navbar";

const Post: React.FC = () =>{
    return(
        <div className="w-full">
            <NavBar/>
            <div className="w-full h-[100vh] flex flex-col   items-center justify-center gap-[20px]">
                <h1 className="font-semibold text-[2em]">Post a Blog</h1>
                <div className="w-1/3 flex flex-col items-center gap-[20px] shadow-[#eee] shadow-lg bg-[red] p-3">
                    
                    <div className="w-full flex flex-col gap-[10px]">
                        <input type="text" placeholder="Enter title" className="w-full border-1 border-[#eee] p-1 rounded-[6px]"/>
                        <input type="text" placeholder="Enter your profile image url" className="w-full border-1 border-[#eee] p-1 rounded-[6px]"/>
                        <input type="text" placeholder="Enter Your blog image url" className="w-full border-1 border-[#eee] p-1 rounded-[6px]"/>
                        <textarea title="content" id="content" placeholder="Enter your blog here" className="w-full rounded-[6px] h-[200px] p-1"/>
                    </div>
                    
                </div>
                <button className="w-1/3 bg-[#7E51FF] p-2 rounded-[10px]">Post</button>
            </div>
        </div> 
    )
}

export default Post;