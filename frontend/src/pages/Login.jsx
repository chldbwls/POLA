import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../AuthContext.jsx";

function Login(){
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const {login} = useAuth();

    const onChangeId=(e)=>{
        setId(e.target.value);
    }

    const onChangePw=(e)=>{
        setPw(e.target.value);
    }

    const onLogin=async()=>{
        try{
            const response = await axios.post('http://localhost:8080/api/user/login', {
                id,
                pw,
            });
            login(response.data.token, response.data.id);
            alert("로그인 성공");
            navigate("/");
        }catch(error){
            console.log("로그인 실패"+error);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
            <h1 className="text-4xl font-bold text-[#B3C5BC] mb-10">
                로그인
            </h1>
            <input
                type="text"
                value={id}
                onChange={onChangeId}
                placeholder="아이디를 입력해주세요"
                className="text-black bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
                type="password"
                value={pw}
                onChange={onChangePw}
                placeholder="비밀번호를 입력해주세요"
                className="text-black bg-white mb-[15px] w-[50vw] max-w-[400px] h-[50px] px-[10px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="w-[40vw] max-w-[300px] h-[50px] bg-[#B3C5BC] text-white px-4 font-bold mt-[10px]"
                onClick={onLogin}
            >
                로그인
            </button>

            <p className="text-sm text-gray-500 mt-4">아직 회원이 아니시라면 <span className="text-[#B3C5BC] cursor-pointer" onClick={()=>navigate("/signup")}>회원가입</span></p>

        </div>
    );
}

export default Login;