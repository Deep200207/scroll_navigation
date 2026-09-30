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
                className="insert-0 top-[40%] fixed bg-black w-full h-150 z-10  ">
                <h1 className="flex justify-center text-center text-[500px] absolute w-[83%]
                    font-mono z-40 text-black tracking-tighter ">WELCOME ITZFIZ</h1>
                <div
                    style={{
                        width: `${scrollY + 220}px`,
                        backgroundColor: '#45DB7D'
                    }}
                    className={`h-150  fixed top-[40%] z-30`}>
                    {/* <h1 className="flex justify-center text-center text-[500px] ">Welcome</h1> */}
                </div>
            </div>
            <div style={{ height: "6500px" }} ></div>
            <img
                src="/car.png"
                className="fixed top-[40%] left-0 w-300 h-150 z-999 "
                style={{
                    transform: `translateX(${scrollY * 1}px)`
                }}>
            </img>
            {/* <h1 className="flex justify-center text-center text-[500px] top-[40%] z-40  ">Welcome</h1> */}
            {scrollY > 300 && (
                <div className={`fixed top-[10%] left-[50%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                rounded-3xl`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 300) / 1000, 0), 1),
                        backgroundColor: "#DEF54F"
                    }}>
                    <h1 className="text-[190px] font-semibold pl-25">58%</h1>
                    <h1 className="text-[60px]  pl-25">Increase in pick up point use</h1>
                </div>
            )
            }
            {scrollY > 2300 && (
                <div className={`fixed top-[10%] left-[75%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                rounded-3xl`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 2300) / 1000, 0), 1),
                        backgroundColor: "#333333",
                        color:"white"
                    }}>
                    <h1 className="text-[190px] font-semibold pl-25">27 %</h1>
                    <h1 className="text-[60px]  pl-25">Increase in pick up point use</h1>
                </div>
            )
            }
            {scrollY > 1200 && (
                <div className={`fixed top-[76%] left-[40%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                rounded-3xl`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 1200) / 1000, 0), 1),
                        backgroundColor: "#6AC9FF"
                    }}>
                    <h1 className="text-[190px] font-semibold pl-25">23%</h1>
                    <h1 className="text-[50px]  pl-25">Decreased in customer phone cells</h1>
                </div>
            )
            }
            {scrollY > 2900 && (
                <div className={`fixed top-[76%] left-[70%] w-[17%] h-[18%] transition-all duration-1000 ease-out
                    rounded-3xl
                ${scrollY > 300 ? "scale-100 opacity-10" : "scale-50 opacity-0"}`}
                    style={{
                        opacity: Math.min(Math.max((scrollY - 2900) / 1000, 0), 1),
                        backgroundColor: "#FA7328"
                    }}>
                    <h1 className="text-[190px] font-semibold pl-25">40%</h1>
                    <h1 className="text-[50px]  pl-25">Decreased in customer phone cells</h1>
                </div>
            )
            }
        </div >
    );
}
export default Hero;