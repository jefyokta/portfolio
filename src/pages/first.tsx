import React, { useEffect, useState } from 'react';

interface FirstProps {
  offsetY: number;
}

const First: React.FC<FirstProps> = ({ offsetY }) => {
  const [opacity, setOpacity] = useState<number>(0);
  const [nameOpacity, setNameOpacity] = useState<number>(1);
  const [typedName, setTypedName] = useState<string>('');
  const fullName = ["J", "e", "f", "y", " ", "O", "k", "t", "a"];
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (charIndex < fullName.length) {
      const typeInterval = setInterval(() => {
        setTypedName((prev) => prev + fullName[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 200);

      return () => clearInterval(typeInterval);
    }
  }, [charIndex, fullName]);

  useEffect(() => {
    if (offsetY > 780) {
      setNameOpacity(0);
    } else {
      setNameOpacity(1);
    }
  }, [offsetY]);

  return (
    <div
      className="flex w-full min-h-screen justify-center items-center z-50 bg-transprent"
      style={{
        transform: `translateY(${offsetY * 1}px)`,
        transition: 'transform 0.1s ease-out, opacity 0.3s ease-in-out',
        opacity: nameOpacity,
      }}
    >
      <h1 className="font-semibold text-white text-xl md:text-6xl">
        <span>Hello! I am </span>
        <span
          className="text-yellow-500"
          style={{ opacity: opacity }}
        >
          {typedName}
        </span>
      </h1>
    </div>
  );
};

export default First;
