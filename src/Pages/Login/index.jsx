import './styles.css';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Layout/AuthContext';
import Alert from '../../Components/Alert';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const inputRef = useRef();

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const onButtonClick = (e) => {
        e.preventDefault();
        if (userName === 'misumi' && password === 'ilovemisumi') {
            localStorage.setItem('loggedIn', true);
            sessionStorage.setItem('reloaded', 'yes');
            login();
            navigate('/');
        } else {
            setErr(true);
            setUserName('');
            inputRef.current.focus();
            setPassword('');
            document.getElementById('alert').style.display = 'block';
        }
    };

    return (
        <div style={{ height: '100vh' }}>
            {err && <Alert title={'Wrong username or password'} content={'Please try again!'} />}
            <form className="mainContainer">
                <div className="titleContainer">
                    <div>Login</div>
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        value={userName}
                        ref={inputRef}
                        placeholder="Enter your username here"
                        onChange={(ev) => setUserName(ev.target.value)}
                        className={'inputBox'}
                        type="text"
                    />
                </div>
                <br />
                <div className="inputContainer">
                    <input
                        value={password}
                        placeholder="Enter your password here"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className={'inputBox'}
                        type="password"
                    />
                </div>
                <br />
                <div className="inputContainer">
                    <input className={'inputButton'} type="submit" onClick={onButtonClick} value={'Log in'} />
                </div>
            </form>
        </div>
    );
};

export default Login;
