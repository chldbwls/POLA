import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../AuthContext.jsx";

function Home(){
    const {isLoggedIn, logout} = useAuth();
    const navigate = useNavigate();

    const onLogin = () => {
        navigate("/login");
    }

    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
            {/* 왼쪽 */}
            <div className="flex w-full h-screen p-4 gap-4 bg-white">
                <div className="flex-1 flex flex-col gap-1">
                <p className="text-lg font-semibold text-black">청년 정책 알아보기</p>
                {/* 청년 정책 카드 */}
                    <div className="relative border rounded-lg p-4 h-[40%] mb-4">
                        <span className="absolute top-2 right-4 text-sm text-gray-700 cursor-pointer">더보기</span>
                    </div>

                <p className="text-lg font-semibold text-black">청년 뉴스 알아보기</p>
                {/* 청년 뉴스 카드 */}
                <div className="relative border rounded-lg p-4 h-[40%] mb-4">
                    <span className="absolute top-2 right-4 text-sm text-gray-700 cursor-pointer">자세히</span>
                </div>
            </div>

            {/* 오른쪽 */}
            <div className="w-[30%] flex flex-col gap-4">
                {/* 로그인 박스 */}
                <div className="mt-7 border rounded-lg p-6 flex flex-col items-center text-center">
                    <div className="text-3xl mb-2">👤</div>
                        <p className="mb-4 text-black font-semibold">맞춤 청년 정책을<br />알아보고 저장하세요!</p>

                        <button className="w-full h-10 rounded bg-[#B3C5BC] text-black font-bold mb-2" onClick={onLogin}>
                        로그인
                        </button>

                        <div className="text-sm text-gray-500 flex gap-2">
                            <span className="cursor-pointer">아이디 찾기</span>|
                            <span className="cursor-pointer">비밀번호 찾기</span>|
                            <span className="cursor-pointer">회원가입</span>
                        </div>
                    </div>

                {/* 하단 추가 박스 */}
                <div className="rounded-lg h-[40%] bg-[#B3C5BC] shadow-md" />
                </div>
            </div>
        </div>
    );
}

export default Home;