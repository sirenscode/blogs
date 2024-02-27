const NavBar: React.FC = () =>{
    return(
        <div id="navbar" className="fixed w-full top-0 bg-[rgba(255,255,255,0.5)] shadow-[rgba(200,200,200,1)] shadow-lg flex flex-row p-[10px] items-center z-[50]">
            <a href="/" className="font-bold">Global<span className="text-[#7E51FF]">Space</span></a>
            <div className="flex flex-row gap-[10px] text-[.8em] ml-[auto] max-[500px]:hidden">
                <a className="navlink " href="#news">NEWS</a>
                <a className="navlink" href="#news">VIDEOS</a>
                <a className="navlink" href="#news">PODCAST</a>
            </div>
            <div className="ml-[auto]">
                <div className="w-[200px] flex max-[500px]:w-[30px]">
                    <div className="w-full flex flex-row border-[1px] border-[#eee] rounded-[6px] p-1 bg-[rgba(255,255,255,0.5)]">
                        <input 
                        type="text" 
                        placeholder="search"
                        className="w-full text-[.8em]"
                        />
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#7E51FF" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar;