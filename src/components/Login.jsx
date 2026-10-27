import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(username, password);
    alert("Logged in!");
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={login}>Login</button>
    </div>
  );
}
