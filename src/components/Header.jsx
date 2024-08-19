import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Cart, List, Search, X } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import { getEmailFromToken, isTokenExpired, logout } from '../services/authService';


function Header({login}) {
  const [carrinho, setcarrinho] = useState(['tennis,carrinho']);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const navigate = useNavigate();
  const email = getEmailFromToken()
  const location = useLocation();

  useEffect(() => {
    if (isTokenExpired()) {
      logout();
    }
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
  } else {
      document.body.classList.remove('overflow-hidden');
  }

  // Cleanup quando o componente for desmontado
  return () => {
      document.body.classList.remove('overflow-hidden');
  };
  }, [isOpen]);

  const handleLogout = () => {
    // Remove o email do localStorage
    logout();
    // Redireciona o usuário para a página de login
    navigate('/Home');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };
  
  const handleButtonClick = () => {
  navigate('/Login');
  };

  return (
    // Header do site
    <header className={`w-full px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] mb-5`}>
      {isOpen &&
        <div
          className={` translate-x-0 bg-black bg-opacity-50 fixed inset-y-14 left-0 transform lg:hidden transition-transform duration-300 w-full
       h-screen flex flex-col z-40 space-y-2 mt-4 ${isOpen ? ' overflow-hidden' : '-translate-x-full'
            }`}>
          <div className='flex flex-col bg-white w-64 px-5 h-full'>
            <div className='flex flex-row justify-between items-center mb-5 mt-5'>
              <p className='text-xl font-semibold text-center' >Paginas</p>
              <button
                id="close-btn"
                className="flex z-50 rounded focus:outline-none pr-5 hover:text-red-700"
                onClick={toggleSidebar}
              >
                <X size={22} />
              </button>
            </div>
            <ul className="flex flex-col space-y-2 text-black font-semibold">
              <Link className={`hover:text-pink-600 ${location.pathname === '/Home' && 'text-pink-600'}`} to="/Home">Home</Link>
              <Link className={`hover:text-pink-600 ${location.pathname === '/Lista-Produtos' && 'text-pink-600'}`} to="/Lista-Produtos">Produtos</Link>
              <Link className={`hover:text-pink-600 ${location.pathname === '/Categoria' && 'text-pink-600'}`} to="/Categoria">Categorias</Link>
              <Link className={`hover:text-pink-600 ${location.pathname === '/Meus-Pedidos' && 'text-pink-600'}`} to="/Meus-Pedidos">Meus Pedidos</Link>
            </ul>
            <div className="flex flex-col items-center mt-64 gap-5 border-t-[1px] border-slate-500">
              {/* Botão de entrar */}
              {email ? 
                <button className={`px-4 py-2 mt-10 text-white rounded hover:bg-pink-900 ${isOpenLogin ? 'bg-pink-900' : 'bg-pink-600' }`} onClick={ () => {toggleLogin(), toggleSidebar()}}>
                  <p>{email}</p>
                </button>
                :
                <>
                  <button onClick={() =>{handleButtonClick(), toggleSidebar()}} className="px-4 py-2 w-full sm:w-36 bg-pink-600 text-white rounded mt-5">Entrar</button>
                  <Link to={"/Login"} onClick={() =>{toggleSidebar()}} state={{ loginRequested: true }} className="text-gray-600 hover:text-pink-600 underline">Cadastre-se</Link>
                </>
              }
            </div>
          </div>
        </div>}
      {/* Barra de navegação */}
      <nav className="flex items-center justify-between py-5 bg-white gap-5">
        {/* Logo e Botão de Menu */}
        <div className="flex items-center">
          {/* Botão para abrir o menu em dispositivos móveis */}
          <button  onClick={toggleSidebar} className={`text-xl mr-4 lg:hidden bg-white-700 text-pink-600 p-2 rounded ${login && 'invisible'}`}>
            <List />
          </button>
          {/* Link para a página inicial com o logo */}
          <Link to="/Home" className="flex items-center cursor-pointer translate-x-5">
            <img src={logo}
              alt="Logo da Loja"
              className="h-13 w-13 mr-2" />
            {/* Logo da loja */}
          </Link>
        </div>

        {/* Input de Pesquisa (somente em telas maiores que 700px) */}
        <div id="searchInput"
          className={`hidden sm:flex flex-row w-full items-center justify-center mx-4 rounded-md border border-slate-100 bg-slate-100 focus-within:border-pink-600 focus-within:text-pink-600 ${login && 'invisible'}`}>
          <input
            className="w-full p-2 mx-4 border-transparent rounded-md bg-slate-100 focus:outline-none text-black"
            placeholder="Pesquisar produto..." />
          <Search className='mr-5'/>
        </div>
        {/* Botões */}
        <div className={`flex items-center space-x-4 ${login && 'invisible'}`}>
          {/* Link para cadastro (somente em telas grandes) */}

          {email ? 
            <button className={`hidden lg:block px-4 py-2 text-white rounded hover:bg-pink-900 ${isOpenLogin ? 'bg-pink-900' : 'bg-pink-600' }`} onClick={toggleLogin}>
              <p>{email}</p>
            </button>
            :
            <>
              <Link to={"/Login"} state={{ loginRequested: true }} className="text-gray-600 hover:text-pink-600 w-[100px] hidden lg:block underline">Cadastre-se</Link>
              <button onClick={handleButtonClick} className="px-4 py-2 bg-pink-600 hover:bg-pink-900 text-white rounded hidden lg:block">Entrar</button>
            </>
          }
          
          {/* Ícone de pesquisa (somente em telas pequenas) */}
          <div id="searchIcon" className="custom-lg:hidden custom-sm:flex cursor-pointer">
          <Search className={`block sm:hidden text-slate-500 hover:text-pink-600 ${login && ' invisible'}`}/>
          </div>
          {/* Ícone de carrinho */}
          <div
            id="cartIcon"
            className="cursor-pointer relative"
          >
            <Cart
              className='text-slate-500 hover:text-pink-600 text-xl'
              onClick={() => {
                setcarrinho([...carrinho, "Novo Item"]);
              }}
            />
            {
              carrinho.length === 1 ? '' : <div>
                <span className="animate-ping absolute bottom-2 -right-3 h-full w-full rounded-full bg-pink-600 opacity-75"></span>
                <div className='absolute bottom-2 -right-2 bg-pink-600 rounded-full text-xs h-4 w-4 text-center text-white' 
                > 
                  {carrinho.length - 1}

                </div>
              </div>
            }
          </div>
        </div>
      </nav>

      {/* Input de Pesquisa para dispositivos móveis */}
      <div 
      id="searchInputMobile" 
      className="hidden flex-col items-center w-full mt-4 px-4">
        <input 
        type="search" 
        className="w-full max-w-lg p-2 border border-gray-300 rounded"
         placeholder="Pesquisar produto..." />
      </div>

      {/* Menu Dropdown para dispositivos móveis */}      
      {email && 
      <div
       className={`fixed top-0 right-0 transform transition-transform bg-white rounded-md duration-300 flex flex-col z-40 space-y-2 px-4 ${isOpenLogin ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex flex-col p-2'>
          <div className='flex flex-row justify-between items-center mb-5'>
            <p className='text-xl font-bold text-center text-pink-600' >Usuário</p>
            <button
              id="close-btn"
              className="flex z-50 rounded focus:outline-none hover:text-pink-600"
              onClick={toggleLogin}
            >
              <X size={22}/>
            </button>
          </div>
          <p className='text-pink-600 font-bold'>{email}</p>
          <button className='bg-pink-600 text-white font-bold rounded-md mt-5 hover:bg-pink-900' onClick={() =>{ handleLogout(), toggleLogin()}}>Sair</button>

        </div>
      </div>}

      {/* Links de navegação para dispositivos grandes */}      
      {!login && <div className="flex flex-row gap-5 text-lg font-semibold text-black">
        <div className="space-x-4 hidden lg:block">
          <Link className={`hover:text-pink-600 hover:border-b-4 hover:border-pink-600 ${location.pathname === '/Home' && 'text-pink-600 border-b-4 border-pink-600 '}`} to="/Home">Home</Link>
          <Link className={`hover:text-pink-600 hover:border-b-4 hover:border-pink-600  ${location.pathname === '/Lista-Produtos' && 'text-pink-600 border-b-4 border-pink-600'}`} to="/Lista-Produtos">Produtos</Link>
          <Link className={`hover:text-pink-600 hover:border-b-4 hover:border-pink-600  ${location.pathname === '/Categoria' && 'text-pink-600 border-b-4 border-pink-600'}`}  to="/Categoria">Categorias</Link>
          <Link className={`hover:text-pink-600 hover:border-b-4 hover:border-pink-600  ${location.pathname === '/Meus-Pedidos' && 'text-pink-600 border-b-4 border-pink-600'}`} to="/Meus-Pedidos">Meus Pedidos</Link>
        </div>
      </div>}
     
   
    </header>
  );
}

export default Header;

