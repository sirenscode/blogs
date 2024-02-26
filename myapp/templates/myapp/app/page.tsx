
"use client"
import axios from "axios";
import { useEffect } from "react";
import NavBar from "./components/navbar";
import SearchComp from "./components/search";
import MainCard from "./components/MainCard";

export default function Home() {
  const title = "My Fist Blog";
  const content = "Yeah it feels awesome";
  var str = new Date().setSeconds(0,0);
  var created_at = new Date(str).toISOString(); 
  
  const data={
    title: "Hello world",
    content: "This is sirens the blogger"
  }
  
  //useEffect(()=>{
    //axios.post("http://localhost:8000/blog/api/posts/",data)
    //.then(response=>(
      //console.log(response.data)
    //))
  //})

  window.addEventListener("scroll",function(){
    if (this.scrollY>90){
      this.document.getElementById("navbar")!.style.background="rgba(255,255,255,1)";
    }else{
      this.document.getElementById("navbar")!.style.background="rgba(255,255,255,0.5)"
    };
  })
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar/>
      <SearchComp/>
      <MainCard/>
    </main>
  );
}
