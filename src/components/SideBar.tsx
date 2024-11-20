import React from "react";
import { useScrollContext } from "./ScrollContext";


export const NavBar: React.FC = () => {
    const { sectionName } = useScrollContext();

    return (
        <div className="fixed text-white top-0 flex justify-center w-full p-2 m-0" style={{ zIndex: 9999 }}>
            <h1 className="text-xs"> {sectionName.name || "Introduction"}</h1>
        </div>
    );
};

const SideBar: React.FC = () => {

    const { sectionName } = useScrollContext()

    return (
        <div className="fixed left-0 p-5 ps-1 flex items-center h-full w-56" style={{ zIndex: 9999 }}>
            <ul className="w-full h-full text-white flex flex-col justify-center py-10 ps-2.5 ">
                <li className="my-5"><a href="#" className={`hover:text-yellow-500 ${sectionName.id == 1 ? "text-yellow-300" : ""}`}> Welcome?</a>
                </li>
                <li className="my-5"><a href="#" className={`hover:text-yellow-500 ${sectionName.id == 2 ? "text-yellow-300" : ""}`}>Who am i?</a></li>
                <li className="my-5"><a href="#" className={`hover:text-yellow-500 ${sectionName.id == 3 ? "text-yellow-300" : ""}`}>My photos</a></li>
                <li className="my-5"><a href="#" className={`hover:text-yellow-500 ${sectionName.id == 4 ? "text-yellow-300" : ""}`}>What can i do?</a></li>
                <li className="my-5"><a href="#" className={`hover:text-yellow-500 ${sectionName.id == 5 ? "text-yellow-300" : ""}`}>What I've been made</a></li>
            </ul>
        </div>)


}

export default SideBar;
