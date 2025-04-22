import { useEffect, useRef, useState } from "react";
import { useScrollContext } from "../components/ScrollContext";


const DrStrange = () => {

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const handRef = useRef<HTMLImageElement | null>(null)
    const [passed, setHasPassed] = useState<Boolean>(false);
    const [top, setTop] = useState<number>(0);
    const [bot, setBot] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(0)
    const { setSectionName } = useScrollContext();

    

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const secTop = sectionRef.current.getBoundingClientRect().top;
                const secBot = sectionRef.current.getBoundingClientRect().bottom;

                if (secTop <= 0) {
                    setHasPassed(true);
                    setTop(secTop);
                    setSectionName({ name: "Intro , Who am I?", id: 2 });
                    if (handRef.current) {
                        handRef.current.style.opacity = "1"
                    }
                } else {
                    setHasPassed(false);
                    setTop(0);
                    setSectionName({ name: "Welcome", id: 1 });

                }

                if (secBot <= 10) {
                    setBot(secBot);
                } else {
                    setBot(0);
                }
            }

            if (handRef.current) {
                const topHand = handRef.current.getBoundingClientRect().top;
                let newOpacity = topHand * -0.01;
                if (newOpacity > 4) {
                    newOpacity = 0

                }
                // console.log(newOpacity);

                handRef.current.style.opacity = newOpacity.toString();
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (passed && bot >= 0) {
            setOpacity(Math.max(0, Math.min(1, top * -0.004)));
        } else {
            setOpacity(0);
        }
    }, [top, bot]);

    return (
        <div className="w-full h-screen mt-24 flex justify-center items-center md:items-start  relative bg-transparent min-w-max "
            style={{
            }}
            ref={sectionRef}
        >
            <img src={`${import.meta.env.BASE_URL}images/masker.png`} className="absolute opacity-1 h-auto" alt="mask"
                style={{
                    zIndex: 60, transform: `translateY(${top * -.75}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    opacity: opacity,

                }}
            />
            <img src={`${import.meta.env.BASE_URL}/images/head.png`} className="absolute" alt="head"
                style={{
                    opacity: opacity,
                    transform: `translateY(${top * -.7}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                }}
            />
            <img src={`${import.meta.env.BASE_URL}/images/righthand.png`} className="absolute opacity-1 mb-10 md:mb-5 -right-48 md:right-64" alt="right hand"
                style={{
                    zIndex: 53,
                    transform: `translateY(${top * -0.8}px) translateX(${top * .6}px) rotate(${top * .05}deg)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-in-out',

                }}
                ref={handRef}
            />
            <img src={`${import.meta.env.BASE_URL}/images/lefthand.png`} className="absolute z-50" alt="left hand"
                style={{
                    opacity: opacity, transform: `translateY(${top * -.7}px) rotate( ${top * -.01}deg) translateX(${top * -.06}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.7s ease-out',

                }}
            />
            <img src={`${import.meta.env.BASE_URL}/images/body.png`} className="absolute" alt="body"
                style={{
                    opacity: opacity, transform: `translateY(${top * -.7}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                }}
            />
            <h1 className="absolute bottom-0 md:-bottom-64 left-0 ms-10 mb-10 text-white font-semibold text-3xl md:text-6xl"
                style={{
                    zIndex: 52,
                    transform: `translateX(${-500 - (top * 2)}px ) translateY(${- (top * .1)}px)`,
                    transition: "transform 0.5s ease-out, opacity 0.5s ease-in-out",
                }}>
                An Artist <br />
                <span className="text-slate-500">& </span>
                <span
                    className="text-teal-300">
                    Software Engineer
                </span>
            </h1>

        </div>
    );
}

export default DrStrange;
