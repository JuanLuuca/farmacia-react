import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgLogin from '../farmaciaLogo.png';

// Componente de Login
export const Login = ({ onLogin }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
  
    const handleLogin = () => {
        // Verifique as credenciais e faça a autenticação
        // Aqui você pode implementar a lógica de autenticação adequada, como fazer uma chamada à API para verificar as credenciais
    
        // Por simplicidade, apenas verificamos se o nome de usuário e a senha não estão vazios
        if (username == 'admin@gmail.com' && password == '123') {
            navigate('/home');
            localStorage.setItem('token', 'asjdoghaso1');
            //onLogin();
        } else {
            alert('Nome de usuário ou senha inválidos');
        }
    };

    return (
      <>
      <section className="bg-gray-50  dark:bg-[#B0C5FF]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-50 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center justify-center">
                  <img alt="Pokedex" src={imgLogin} className="w-16 h-16" />
              </div>
                  <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#71C6B9]">Seu email</label>
                          <input type="email" id="email" value={username} onChange={(event) => setUsername(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#71C6B9]">Senha</label>
                          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                              </div>
                              <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 dark:text-black">Lembrar Senha</label>
                              </div>
                          </div>
                      </div>
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#71C6B9] hover:bg-primary-700 focus:ring-primary-800">Entre em sua conta</button>
                  </form>
              </div>
          </div>
      </div>
      </section>
      </>
  )
};