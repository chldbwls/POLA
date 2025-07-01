import { Navigate } from "react-router-dom";
import { useState } from 'react';

function Signup(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('')
    const [isMatch, setIsMatch] = useState(false);
    const [email, setEmail] = useState('');
    const [showTimer, setShowTimer] = useState(false);
    const [leftTime, setLeftTime] = useState(180);
    const [checkCode, setCheckCode] = useState('');

    const onChangeId=(e)=>{
        setId(e.target.value);
    }

    const onChangePw=(e)=>{
        setPw(e.target.value);
    }

    const onChangePwCheck=(e)=>{
        const val = e.target.value;
        setPwCheck(e.target.value)
        setIsMatch(pw===val);
    }

    const onChangeEmail=(e)=>{
        setEmail(e.target.value);
    }

    const onCheckEmail=()=>{
        console.log(email);
        startTimer();
    }

    const onChangeCheckCode=(e)=>{
        setCheckCode(true);
    }

    const startTimer=()=>{
        setShowTimer(true);
        setLeftTime(180);
        const timer=setInterval(()=>{
            setLeftTime((prev)=>{
                if(prev<=1){
                    clearInterval(timer);
                    return 0;
                }
                return prev-1;
            })
        },1000);
    }

    const formatTime=(sec)=>{
        const m=String(Math.floor(sec/60)).padStart(2,'0');
        const s=String(sec%60).padStart(2,'0');
        return `${m}:${s}`;
    }

    
    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
            <h1 className="text-4xl font-bold text-[#B3C5BC] mb-10">
                회원가입
            </h1>
            <input
                type="text"
                value={id}
                onChange={onChangeId}
                placeholder="아이디를 입력해주세요"
                className="bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="이메일을 입력해주세요"
                    className=" bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button className="absolute w-[50px] right-2 top-[25px] -translate-y-1/2 h-[30px] bg-[#B3C5BC] text-white px-4 font-bold"
                    onClick={onCheckEmail}
                >
                    <span className="text-xs absolute top-1.5 right-0.5">인증번호</span>
                    {showTimer&&(
                    <p className="absolute top-1 left-[70px] text-sm text-[#B3C5BC] mb-2">{formatTime(leftTime)}</p>
                    )}
                </button>
            </div>
            {showTimer && (
                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        value={checkCode}
                        onChange={onChangeCheckCode}
                        placeholder="인증번호 입력"
                        className="bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
            )}
            <input
                type="password"
                value={pw}
                onChange={onChangePw}
                placeholder="비밀번호를 입력해주세요"
                className="bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
                type="password"
                value={pwCheck}
                onChange={onChangePwCheck}
                placeholder="비밀번호를 다시 입력해주세요"
                className="bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
                type="submit"
                className="bg-[#B3C5BC] text-white mt-[10px] w-[40vw] max-w-[300px] h-[50px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
            >회원가입</button>
        </div>
    );
}

export default Signup;