import React, { useState } from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import {  useNavigate, useLocation } from "react-router-dom";
import { createAccount } from './../services/createAccountService';
import Modal from '../components/Modal';

export default function SighUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('' || location.state?.email);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleCreateAccount = async (event) => {
        event.preventDefault();
        const nameParts = name.trim().split(' ');

        const firstname = nameParts[0];
        const surname = nameParts.slice(1).join(' ');
        try {
            const userData = {firstname, surname, email, password};
            await createAccount(userData) 
            setShowModal(true);
            // Aguarda 2 segundos e redireciona para a tela de login
            setTimeout(() => {
                setShowModal(false);
                navigate('/Login');
            }, 2000);
        } catch (error) {
            setErrorMessage('Falha ao Criar Conta. Verifique e tente novamente.');
        }
    };

    return(
        <div className="flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] bg-slate-100">
            <div className='flex flex-row gap-16 justify-center'>
                    {showModal && <Modal message="Conta criada com sucesso!" />}
                    <div className='flex flex-col w-[600px] rounded-md p-6 gap-4 mb-32'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-bold'>Criar Conta</p>
                        </div>
                        <form onSubmit={handleCreateAccount} className='p-5'>
                            <div className='flex flex-col gap-4 mb-5'>
                                 <div className='flex flex-col gap-4'>
                                    <label className='font-bold'>Nome Completo*</label>
                                    <input 
                                        className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md' 
                                        type="text" 
                                        placeholder="Nome Completo"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                    />
                                </div>
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
                            <button type='submit' className='w-full mt-5 bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900'>
                                Criar Conta
                            </button>
                            {errorMessage && <p className='mt-5 text-pink-600 text-lg text-center animate-pulse'>{errorMessage}</p>}
                        </form>
                    </div>
            </div>
        </div>
    )
}