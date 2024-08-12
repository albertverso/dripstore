import '../style/Login.css'
import tenis from '../assets/loginTenis.svg';
import gmail from '../assets/gmail.svg'
import face from '../assets/faceColor.svg'

export default function Login() {
    return(
        <div className="bg-gradiente-login flex flex-col px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
            <div className='flex flex-row pt-10 gap-16 mt-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col bg-white w-[600px] rounded-md p-6 gap-4 mb-32'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-3xl font-bold'>Acesse sua conta</p>
                            <p>Novo cliente? Então registre-se <a className=' underline' href="">aqui</a></p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4'>
                                <label className='font-bold'>Login *</label>
                                <input type="text" className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label className='font-bold'>Senha *</label>
                                <input type="password" className='focus:outline-pink-600 text-black bg-slate-200 p-2 rounded-md' />
                            </div>
                        </div>

                        <a href="" className='underline'>Esqueci minha senha</a>
                        <button className='w-full bg-pink-600 rounded-md p-2 font-bold text-white hover:bg-pink-900'>
                            Acessar Conta
                        </button>

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
                <div>
                    <img src={tenis} alt=""  height={600} className=' relative bottom-10'/>
                </div>
            </div>
        </div>
    )
}