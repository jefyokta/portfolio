import { useEffect, useRef, useState } from "react";
import Magic from "../components/Magic";
import { useScrollContext } from "../components/ScrollContext";

const Third = () => {
    const MagicRef = useRef<HTMLDivElement | null>(null);
    const [topPosition, setTopPosition] = useState<number>(0);

    const [opacity, setOpacity] = useState<number>(0);
    const [magicY, setMagicY] = useState<number>(0)
    useEffect(() => {
        const handleScroll = () => {
            if (MagicRef.current) {
                const top = MagicRef.current.getBoundingClientRect().top;
                setTopPosition(top);
          
                if (top <= 200) {
                    setOpacity(1)

                    setMagicY(prev => prev + 0.1)

                }
                else {
                    setOpacity(0)
                    setMagicY(0)

                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className="flex justify-center w-full relative min-h-screen " ref={MagicRef}>
            <Magic />
        </div>
    );
};

export default Third;
