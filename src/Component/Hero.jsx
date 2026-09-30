"use client"
import { useEffect, useState } from "react";

function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <div
                className="insert-0 top-[40%] fixed bg-black w-full h-50 z-10  ">
                <h1 className="flex justify-center text-center text-[150px] absolute w-[83%]
                    font-mono z-40 text-black tracking-tighter ">WELCOME ITZFIZ</h1>
                <div
                    style={{
                        width: `${scrollY + 220}px`,
                        backgroundColor: '#45DB7D'
                    }}
                    className={`h-50  fixed top-[40%] z-30`}>
                    {/* <h1 className="flex justify-center text-center text-[500px] ">Welcome</h1> */}
                </div>
            </div>
            <div style={{ height: "2100px" }} ></div>
            <img
                src="/car.png"
                className="fixed top-[40%] left-0 w-90 h-50 z-999 "
                style={{
                    transform: `translateX(${scrollY * 1}px)`
                }}>
            </img>
            {/* <h1 className="flex justify-center text-center text-[500px] top-[40%] z-40  ">Welcome</h1> */}
            {scrollY > 170 && (
                <div className={`fixed top-[10%] left-[50%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                rounded-3xl`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 150) / 100, 0), 1),
                        backgroundColor: "#DEF54F"
                    }}>
                    <h1 className="text-[70px] font-semibold pl-10">58%</h1>
                    <h1 className="text-[20px]  pl-10">Increase in pick up point use</h1>
                </div>
            )
            }
            {scrollY > 650 && (
                <div className={`fixed top-[10%] left-[75%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                rounded-3xl`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 200) / 1000, 0), 1),
                        backgroundColor: "#333333",
                        color:"white"
                    }}>
                    <h1 className="text-[70px] font-semibold pl-10">27%</h1>
                    <h1 className="text-[20px]  pl-10">Increase in pick up point use</h1>
                </div>
            )
            }
            {scrollY > 200 && (
                <div className={`fixed top-[76%] left-[40%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                rounded-3xl`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 100) / 1000, 0), 1),
                        backgroundColor: "#6AC9FF"
                    }}>
                    <h1 className="text-[70px] font-semibold pl-10">23%</h1>
                    <h1 className="text-[17px]  pl-8">Decreased in customer phone cells</h1>
                </div>
            )
            }
            {scrollY > 900 && (
                <div className={`fixed top-[76%] left-[70%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                    rounded-3xl
                ${scrollY > 300 ? "scale-100 opacity-10" : "scale-50 opacity-0"}`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 300) / 1000, 0), 1),
                        backgroundColor: "#FA7328"
                    }}>
                    <h1 className="text-[70px] font-semibold pl-10">40%</h1>
                    <h1 className="text-[17px]  pl-8">Decreased in customer phone cells</h1>
                </div>
            )
            }
        </div >
    );
}
export default Hero;