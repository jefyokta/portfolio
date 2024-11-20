import { useEffect, useRef, useState } from "react";
import Spacer from "./Spacer";
import { useScrollContext } from "./ScrollContext";

export const Magic = () => {
    const reference = useRef<HTMLDivElement | null>(null);
    const MagicRef = useRef<HTMLDivElement | null>(null);

    const [opacity, setOpacity] = useState<number>(0);
    const [radius, setRadius] = useState<number>(0);

    const { setSectionName } = useScrollContext()

    useEffect(() => {
        const handleScroll = () => {
            if (reference.current) {
                const rect = reference.current.getBoundingClientRect();
                const tp = rect.top;
                const viewportHeight = window.innerHeight;
                if (tp <= 100) {
                    const calculatedRadius = Math.max(150, window.innerWidth - tp);
                    setRadius(calculatedRadius);
                } else {
                    setRadius(0);
                }
                const newOpacity = Math.max(0, Math.min(1, (viewportHeight - tp) / viewportHeight));
                setOpacity(newOpacity);
                if (MagicRef.current) {
                    const magicTop = MagicRef.current.getBoundingClientRect().top;
                    if (magicTop <= 0) {
                        reference.current.style.position = "relative"
                        setSectionName({ name: "move", id: 3 })

                    } else {
                        reference.current.style.position = "absolute"

                    }
                }
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [radius]);

    const portalStyle: React.CSSProperties = {
        zIndex: 999,
        width: `${radius}px`,
        height: `${radius}px`,
        boxShadow: '0px 0px 30px 10px rgba(255, 165, 0, 0.8)',
        border: `${2}px solid orange`,
        borderRadius: '50%',
        opacity: opacity,
        transformOrigin: 'center',
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out',
    };

    return (
        <div
            ref={reference}
            className="absolute -top-96 w-full min-h-screen flex justify-center "
            style={{ zIndex: 1000 }}
        >
            <div className="absolute h-6 overflow-hidden flex items-center bg-[url('/images/drk.jpg')] bg-no-repeat bg-center bg-[length:2000px_1400px]" style={portalStyle} ref={MagicRef}>
                <div className="w-screen w-full h-full h-screen  flex justify-center items-center" >
                    {/* <img src="/images/darkdimension.png" className="w-screen min-h-screen h-full" alt="" /> */}
                    <h1>Hello this is the next page</h1>
                </div>
            </div>
            <Spacer />

        </div>
    );
};

export default Magic;
