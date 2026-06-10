import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/konkuk.png";

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();

  const USERS = [
    {
      id: "202421912",
      pw: "ckddus0815@",
    },
    {
      id: "202220981",
      pw: "1q2w3e4r",
    },
  ];

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    const user = USERS.find(
      (user) => user.id === id && user.pw === pw
    );

    if (user) {
      onLogin();
      navigate("/home");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <section className="login-container">
      <img className="logo" src={logo} alt="Konkuk University" />

      <span>아이디</span>
      <input
        type="text"
        placeholder="학번(202612345)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <span>비밀번호</span>
      <input
        type="password"
        placeholder="PW"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleLogin();
        }}
      />

      <p>※ 건국대학교 학사정보시스템의 아이디와 비밀번호를 입력하세요.</p>

      <button onClick={handleLogin}>로그인</button>
    </section>
  );
}