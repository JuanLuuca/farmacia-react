import { Link, useNavigate } from "react-router-dom";

export const Sidebar = ({ isOpen, toggleSidebar }: any) => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div
      className={`sidebar bg-[#B0C5FF] text-white w-64 flex-shrink-0 p-4 transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="sidebar-content">
        <div className="sidebar-header flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="space-y-5">
          <li className="bg-white p-1 rounded-md font-mono font-semibold">
          <Link to="/home">
            <a href="#" className="text-black hover:text-blue-200">
              Medicamentos
            </a>
          </Link>
          </li>
          <li className="bg-white p-1 rounded-md font-mono font-semibold">
          <Link to="/cadastro-user">
            <a className="text-black hover:text-blue-200">
              Cadastro de Usuários
            </a>
          </Link>
          </li>
          <li onClick={handleLogout} className="bg-white p-1 rounded-md font-mono font-semibold">
            <a href="#" className="text-black hover:text-blue-200">
              Sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};