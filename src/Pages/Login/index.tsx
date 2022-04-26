import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleLogin() {
        if (email && password) {
            let isLogged = await auth.signIn(email, password);
            if(isLogged) {
                navigate('/');
            } else {
                alert("Erro");
            }

        }
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <h2>Logar</h2>

            <input type="text" value={email} placeholder="Digite seu Email!" onChange={handleEmailChange} />

            <input type="password" value={password} placeholder="Digite sua senha!" onChange={handlePasswordChange}/>

            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}