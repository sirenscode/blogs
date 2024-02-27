import Image from "next/image";
import { useEffect, useState } from "react";
interface CardProps{
    title: string;
    content: string;
    image_url: string;
    profile_url: string;
}

const Card: React.FC<CardProps> = (props) =>{
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [profile_url, setProfileUrl] = useState("");

    useEffect(()=>{
        setTitle(props.title);
        setContent(props.content);
        setImageUrl(props.image_url);
        setProfileUrl(props.profile_url);
    },[]);
    
    return(
        <div className="w-1/2 flex flex-row items-center gap-[10px] max-[500px]:w-full">
            <div className="flex flex-col items-center mb-[auto]">
                <div className="w-[50px] h-[50px] bg-cover bg-center bg-no-repeat rounded-full" style={{backgroundImage:`url("${profile_url}")`}}>
                </div>
                <h2 className="font-semibold text-[1.5em] max-[500px]:text-[1.2em]">26</h2>
                <div className="flex flex-col gap-[10px] items-center">
                    <p className="rotate-90 text-[1.5em] text-[#999] max-[500px]:text-[1.1em]">FEB</p>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#999" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"/></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16"><path fill="#999" d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/></svg></button>
                </div>
                
            </div>
            <div className="bg-[#fff] w-3/4 rounded-[20px] flex flex-col items-center shadow-[#676767] shadow-lg p-[20px] cursor-pointer duration-500 transition-transform hover:scale-105 max-[500px]:w-full">
                <h1 className="font-semibold ">{title}</h1>
                <div className={"mt-[20px] rounded-[10px] shadow-[#676767] shadow-lg h-[250px] w-full bg-cover bg-no-repeat bg-center"} style={{backgroundImage:`url("${imageUrl})`}}></div>
                <p className="text-[rgba(0,0,0,0.7)] p-[20px] text-[.8em]">{content}</p>
                <div className="flex flex-row w-full pl-[25px] pr-[25px] max-[500px]:p-[0px]">
                    <div className="flex flex-row  gap-[20px]">
                        <button className="flex flex-row text-[rgba(0,0,0,0.7)] items-center justify-center text-[.8em] gap-[5px] max-[500px]:text-[.5em]"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="rgba(0,0,0,0.6)" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.378 8.378 0 0 0 .721-1.844l-1.452-.377A6.878 6.878 0 0 1 9.2 6.11zm2.06-3.991a.885.885 0 0 1 .596.61l1.452-.376a2.384 2.384 0 0 0-1.59-1.662zm-.863.313a.514.514 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.596.596 0 0 1 .438-.03l.459-1.428a2.096 2.096 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.533 5.533 0 0 0-.104-2.284l-1.452.377a4.03 4.03 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.918.918 0 0 1 .316-.774l-.98-1.137a2.418 2.418 0 0 0-.83 2.04z"/><path fill="#DFE1E7" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity="0.5"/></svg><span>750 likes</span></button>
                        <button className="flex flex-row text-[rgba(0,0,0,0.7)] items-center justify-center text-[.8em] gap-[5px] max-[500px]:text-[.5em]"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="rgba(0,0,0,0.6)" d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM3 17V3h18v17.077L17.923 17z"/></svg> <span>500 comments</span></button>
                    </div>
                    <button className="ml-[auto] flex flex-row gap-[10px] text-[rgba(0,0,0,0.7)] items-center text-[.8em] max-[500px]:text-[.5em]"><span>Read More</span><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 15 15"><path fill="rgba(0,0,0,0.6" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg></button>
                </div>
                

            </div>
            
        </div>
    )
}

export default Card;