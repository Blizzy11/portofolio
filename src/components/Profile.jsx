import React from "react";
import ReactLogo from "../assets/react.png";
import ProfilePhoto from "../assets/Profile.jpg";


const Profile = () => {
    return (
        <div className="bg-black">
            <div className="max-w-[1024px] mx-auto py-20">
                <div className="md:flex items-center">
                    <img src={ProfilePhoto} alt="" className="w-[250px] md:w-[300px] mx-auto p-5 rounded-[50px]"/>
                    <div className="">
                        <h1 className="text-3xl text-[#00df9a] text-center md:text-left">I'am Muhammad Haris Kumala</h1>
                        <h1 className="text-xl pb-4 text-center md:text-left">Full Stack Developer</h1>
                        <h1 className="font-semibold text-slate-500 text-justify px-6 pb-5 md:px-0 md:pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe distinctio necessitatibus veritatis veniam fugit suscipit tempore inventore doloribus doloremque dignissimos impedit dolorem debitis at earum repudiandae ipsum ullam, numquam ad iusto ducimus corporis, quisquam dolor? Molestiae, eius reiciendis maiores natus odio facilis impedit qui repellat? Eveniet voluptates laudantium totam!</h1>
                        <div className="flex justify-center md:justify-start">
                            <button className="bg-[#00df9a] rounded-xl py-2 px-5 text-gray-700 font-semibold">My Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile