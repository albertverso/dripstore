import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import '../style/Login.css'
import tenis from '../assets/loginTenis.svg';
import gmail from '../assets/gmail.svg'
import face from '../assets/faceColor.svg'
import { ArrowClockwise } from 'react-bootstrap-icons';
import { authLogin, isAuthenticated } from '../services/authService';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const [isSighUp, setIsSighUp] = useState(false || location.state?.loginRequested);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            const data = await authLogin(email, password);
            if (isAuthenticated) {
                navigate('/Home');
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
        setErrorMessage(error.message);
        } finally {
        setLoading(false);
        }
    };

    const handleSighUp = async (event) => {
        event.preventDefault();
        navigate('/SighUp' , { state: { email } });
    }
    
    return(
        <div className="bg-gradiente-login flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
            <div className='flex flex-row pt-10 gap-16 mt-10 justify-center lg:justify-start'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col bg-white w-full lg:w-[600px] rounded-md p-6 gap-4 mb-32'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-bold'>Acesse sua conta</p>
                            <p>{ isSighUp ? 'Novo cliente? Então registre-se' : 'Já possui uma conta? Entre'} <a onClick={() => setIsSighUp(!isSighUp)} className=' underline cursor-pointer' >aqui.</a></p>
                        </div>
                        {isSighUp ? 
                            <form onSubmit={handleSighUp}>
                                <div className='flex flex-col gap-4 mb-5'>
                                    <div className='flex flex-col gap-4'>
                                        <label className='font-bold'>Email *</label>
                                        <input 
                                            className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md' 
                                            type="email" 
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required 
                                        />
                                    </div>
                                </div>
                                <button type='submit' disabled={loading} className={`w-full mt-5 bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900 ${loading && 'cursor-not-allowed bg-pink-900'}`}>
                                {loading ? (
                                    <span className="flex items-center text-light justify-center">
                                        <div className="animate-spin text-light mr-3">
                                            <ArrowClockwise/>
                                        </div>
                                        Carregando...
                                    </span>
                                    ) : (
                                    'Criar Conta'
                                    )}
                                </button>
                                {errorMessage && <p className='mt-5 text-pink-600 text-lg text-center animate-pulse'>{errorMessage}</p>}
                            </form>
                        :
                            <form onSubmit={handleLogin}>
                                <div className='flex flex-col gap-4 mb-5'>
                                    <div className='flex flex-col gap-4'>
                                        <label className='font-bold'>Login *</label>
                                        <input 
                                            className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md' 
                                            type="email" 
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <label className='font-bold'>Senha *</label>
                                        <div className='flex flex-row w-full items-center bg-slate-200 border-2 focus-within:border-pink-600 focus-within:text-pink-600 rounded-md'>
                                            <input 
                                                className='w-full outline-none text-black bg-slate-200 p-2 rounded-md' 
                                                type={showPassword ? 'text' : 'password'} 
                                                placeholder="Senha"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required 
                                            />
                                            {
                                                showPassword ?
                                                    <Eye size={22} className='mr-5 cursor-pointer' onClick={() => setShowPassword(false)}/>
                                                : 
                                                    <EyeSlash size={22} className='mr-5 cursor-pointer' onClick={() => setShowPassword(true)}/>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <a href="" className='underline'>Esqueci minha senha</a>
                                <button type='submit' disabled={loading} className={`w-full mt-5 bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900 ${loading && 'cursor-not-allowed bg-pink-900'}`}>
                                {loading ? (
                                    <span className="flex items-center text-light justify-center">
                                        <div className="animate-spin text-light mr-3">
                                            <ArrowClockwise/>
                                        </div>
                                        Carregando...
                                    </span>
                                    ) : (
                                    'Acessar Conta'
                                    )}
                                </button>
                                {errorMessage && <p className='mt-5 text-pink-600 text-lg text-center animate-pulse'>{errorMessage}</p>}
                            </form>
                        } 
                        <div className='flex flex-row items-center justify-center gap-5'>
                            <p>Ou faça login com</p>
                            <a href="">
                                <img src={gmail} alt="" />
                            </a>
                            <a href="">
                                <img src={face} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:flex'>
                    <img src={tenis} alt=""  height={600} className='relative bottom-10'/>
                </div>
            </div>
        </div>
    )
}