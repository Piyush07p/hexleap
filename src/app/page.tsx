"use client"
import Image from "next/image";
import {sportsData,sportsData2} from './data/data'
import { useState } from "react";

export default function Home() {

    const [theme,setTheme]=useState<boolean>(true)
    const changeTheme=():void=>{
        setTheme((prevState)=>!prevState)
    }
  return (
      <>
        <nav className={`h-[3rem] w-full ${theme?"bg-[#191919] text-white":"bg-[#F7F7F8] text-black"} px-[4rem] flex items-center justify-end `}>
                <h1 className="border-2 px-2 rounded  cursor-pointer " onClick={changeTheme}>Click for {theme?"light":"dark"} mode</h1>
        </nav>
          <section className={`w-full p-2 flex flex-col  items-center ${theme?"bg-[#191919]" :"bg-[#F7F7F8]"} p-[3rem]`}>
              <div className="w-full px-[10rem] py-2">
                 <span  className={`border-b-2 text-left font-semibold border-blue-400 ${theme?"text-white" :"text-black"}`}>Sports</span>
              </div>
              <div className=" flex p-2 flex-wrap justify-center">
                    {
                        sportsData.map((elem)=>{
                            return(
                                <>
                                    <div className={`w-[13rem]  mx-2 my-2 ${theme?"bg-[#3B3E47]" :"bg-white"} p-[0.8rem]  text-white shadow-xl `}>
                                        <div className="h-[77%]">
                                            <img src={elem.image} className="object-contain  h-[100%]  w-full" alt="" />
                                        </div>
                                        <h1 className={`h-[10%] py-1 ${theme?"text-white" :"text-[#000]"}`}>{elem.name}</h1>
                                        <div className={`h-[13%]  ${theme?"bg-[#292B32] text-white" :"bg-white text-[#000]"}  text-[0.8rem] p-2 justify-between flex `}>
                                            <span>
                                                    <h1>Total Event</h1>
                                                     <p className="font-semibold">{elem.event}</p>
                                            </span>
                                            <span>
                                                  <h1>Sport </h1>
                                                  <p className="font-semibold">{elem.sport}</p>
                                            </span>
                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }
                     <div className={`w-[13rem] mx-2  ${theme?"bg-[#3B3E47]" :"bg-white"} p-[0.8rem]  text-white shadow-2xl `}>
                                        <div className="h-[45%] relative">
                                            <img src={"./img/advertis.png"} className="object-contain  h-[100%]  w-full" alt="" />
                                            <img className="absolute right-0 top-2" src="./img/Ad_logo.png" alt="" />
                                        </div>
                                        <div className={`h-[55%] ${theme?"text-white" :"text-[#000]"}  mx-1 text-[0.8rem] p-2 justify-between  `}>
                                                <h1 className="text-[1rem] my-3 font-bold">Advertisement title</h1>
                                                  <p className="">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse mollitia 
                                                    beatae quos aperiam placeat, ullam nihil dolores fuga explicabo consequatur 
                                                    dolorum atque! Eum quas corporis labore aliquid error sapiente.
                                                  </p>

                                        </div>
                                    </div>

                     
              </div>
              <div className="w-full flex justify-center">
                 <button className="text-white text-[0.7] bg-blue-500 py-2 px-4 mt-10 rounded">See More</button>
              </div>
          </section>

          {/* --------------------------------------(section-2)--------------------------------------- */}

          <section className={`w-full p-2 flex flex-col  items-center ${theme?"bg-[#191919]" :"bg-[#F7F7F8]"} p-[3rem]`}>
              <span  className={` font-bold text-[1.3rem] sm:text-[2rem] md:text-[3rem] border-blue-400 ${theme?"text-white" :"text-black"}`}>Collection Spotlight</span>
              <p className={`${theme?"text-white" :"text-black"} w-[60%] my-6  text-center text-[0.8rem]`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

              <div className="flex p-2 relative flex-wrap justify-center">
                <div  className="flex items-center absolute lg:left-[-5rem] left-[-0.5rem] top-1/2 -translate-y-1/2 ">
                    <img className="border-2 p-2 border-blue-500" src="./img/leftArrow.png" alt="" />
                </div>
                    {
                        sportsData2.map((elem)=>{
                            return(
                                <>
                                    <div className={`w-[14rem] mx-6 my-2 relative  ${theme?"bg-[#3B3E47]" :"bg-white"}   text-white shadow-xl `}>
                                        <div className="">
                                            <img src={elem.image} className="object-contain  h-[100%]  w-full" alt="" />
                                        </div>
                                        
                                        <div className={`items-center mx-1 text-[0.8rem] p-2 justify-between ${theme?"text-white" :"text-black"}  flex flex-col border-dashed border-[#858585]  border-t-2`}>
                                            <h1 className={`font-semibold text-[0.9rem] h-[15%] py-1 ${theme?"text-white" :"text-[#000]"}`}>{elem.name}</h1>
                                            <h2 className="mt-1 text-[0.7rem]">{elem.date}</h2>
                                            <p className=" mt-1 text-[0.7rem] text-center">{elem.team}</p>
                                            <button className="py-2 px-3 w-[95%] text-white bg-black mt-2">{elem.btn}</button>
                                        </div>
                                        <p className={`w-5 z-10 ${theme?"bg-[#191919]":"bg-[#F7F7F8]"} shadow-inner h-5 absolute rounded-full bottom-[27%] left-[-0.5rem]`}> </p>
                                        <p className={`w-5 z-10 ${theme?"bg-[#191919]":"bg-[#F7F7F8]"} h-5 absolute shadow-inner rounded-full bottom-[27%] right-[-0.5rem]`}></p>
                                    </div>


                                </>
                            )
                        })
                    }
                <div className="flex items-center absolute lg:right-[-5rem] right-[-0.5rem] top-1/2 -translate-y-1/2 ">
                    <img  className="border-2 p-2   border-blue-500" src="./img/rightArrow.png" alt="" />
                </div>
                     
              </div>
          </section>
      </>
  );
}
