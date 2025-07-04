import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext.jsx";

function Navbar(){
    const {isLoggedIn, logout} = useAuth();
    const navigate = useNavigate();

    const onLogout=()=>{
        logout();
        alert("로그아웃 되었습니다.");
        navigate("/");
    }

    return(
        <div className="flex justify-between items-center px-6 py-4 shadow-md bg-[#B3C5BC] h-[10vh]">
            <div>
                <h1 className="text-2xl font-bold cursor-pointer text-white" onClick={() => navigate("/")}>
                POLA
                </h1>
            </div>

            <div className="flex gap-4 text-white">
                <Link to="/search" className="text-white hover:text-green-900 text-lg">검색</Link>

                {isLoggedIn ? (
                <span onClick={onLogout} className="text-white hover:text-green-900 mx-10 text-lg">로그아웃</span>
                ) : (
                <Link to="/login" className="text-white hover:text-green-900 mx-10 text-lg">로그인</Link>
                )}
            </div>
        </div>
    );
}

export default Navbar;