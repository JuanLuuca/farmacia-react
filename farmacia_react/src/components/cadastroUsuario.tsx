import { useState } from 'react';
import { Sidebar } from './sidebar';

export const CadastroUsuarios = () => {
  const [usuarios, setUsuarios] = useState<any>([
    { id: 1, nome: 'Juan Lucas', email: 'juanlucas@gmail.com', senha: '12345', crf: '867345198', rg: '278854-3', cpf: '019765488' },
    { id: 2, nome: 'Karla Chaves', email: 'karlachaves@gmail.com', senha: '5678', crf: '592736513', rg: '888854-1', cpf: '012765781' },
    { id: 3, nome: 'Misael Uchoa', email: 'misaeluchoa@gmail.com', senha: '78910', crf: '195563416', rg: '128854-8', cpf: '014765456' }
  ]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [crf, setCrf] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');

  const [isSenhaVisible, setIsSenhaVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [editingUsuarioId, setEditingUsuarioId] = useState(null);
  const [editedUsuario, setEditedUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    crf: '',
    rg: '',
    cpf: ''
  });

  const handleNomeChange = (event: any) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event: any) => {
    setSenha(event.target.value);
  };

  const handleCRFChange = (event: any) => {
    setCrf(event.target.value);
  };

  const handleRGChange = (event: any) => {
    setRg(event.target.value);
  };

  const handleCPFChange = (event: any) => {
    setCpf(event.target.value);
  };


  const handleToggleSenhaVisibility = () => {
    setIsSenhaVisible(!isSenhaVisible);
  };

  const handleAddUsuario = () => {
    const novoUsuario = {
      id: Math.random(),
      nome,
      email,
      senha,
      crf,
      rg,
      cpf
    };

    setUsuarios([...usuarios, novoUsuario]);
    setNome('');
    setEmail('');
    setSenha('');
    setCrf('');
    setRg('');
    setCpf('');
  };

  const handleEditUsuario = (usuario: any) => {
    setEditingUsuarioId(usuario.id);
    setEditedUsuario({ ...usuario });
  };

  const handleSaveEditUsuario = () => {
    const updatedUsuarios = usuarios.map((usuario: any) => {
      if (usuario.id === editingUsuarioId) {
        return {
          ...usuario,
          ...editedUsuario,
        };
      }
      return usuario;
    });

    setUsuarios(updatedUsuarios);
    setEditingUsuarioId(null);
    setEditedUsuario({ nome: '', email: '', senha: '', crf: '', rg: '', cpf: '' });
  };

  const handleDeleteUsuario = (usuarioId: any) => {
    const updatedUsuarios = usuarios.filter((usuario: any) => usuario.id !== usuarioId);
    setUsuarios(updatedUsuarios);
  };

  return (
    <>
    <header className="bg-[#B0C5FF] py-4 px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">DrogsCare</h1>
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
      </header>
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Cadastro de Usuários</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={handleNomeChange}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
            type='number'
            placeholder="CRF"
            value={crf}
            onChange={handleCRFChange}
            className="p-2 border border-gray-300 rounded mr-2"
          />
        <input
            type='number'
            placeholder="RG"
            value={rg}
            onChange={handleRGChange}
            className="p-2 border border-gray-300 rounded mr-2"
          />
        <input
            type='number'
            placeholder="CPF"
            value={cpf}
            onChange={handleCPFChange}
            className="p-2 border border-gray-300 rounded mr-2"
          />
        <div className="relative">
          <input
            type={isSenhaVisible ? 'text' : 'password'}
            placeholder="Senha"
            value={senha}
            onChange={handleSenhaChange}
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <button
            type="button"
            onClick={handleToggleSenhaVisibility}
            className="absolute right-0 top-0 bottom-0 px-3 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              {isSenhaVisible ? (
                <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
              ) : (
                <>
                  <path d="M12 19.5A7.5 7.5 0 1 0 12 4.5v15z" />
                  <path d="M12 8v4M8 12h4" />
                </>
              )}
            </svg>
          </button>
        </div>
        <button
          onClick={handleAddUsuario}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Adicionar Usuário
        </button>
      </div>
      <ul className="space-y-4">
        {usuarios.map((usuario: any) => (
          <li key={usuario.id} className="bg-gray-100 p-4 rounded">
            {editingUsuarioId === usuario.id ? (
              <div className="flex items-center justify-between">
                <div>
                  <input
                    type="text"
                    value={editedUsuario.nome}
                    onChange={(e) =>
                      setEditedUsuario({ ...editedUsuario, nome: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded mr-2"
                  />
                  <input
                    type="email"
                    value={editedUsuario.email}
                    onChange={(e) =>
                      setEditedUsuario({ ...editedUsuario, email: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded mr-2"
                  />
                  <input
                    type="number"
                    value={editedUsuario.crf}
                    onChange={(e) =>
                      setEditedUsuario({ ...editedUsuario, crf: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded mr-2"
                  />
                  <input
                    type="number"
                    value={editedUsuario.cpf}
                    onChange={(e) =>
                      setEditedUsuario({ ...editedUsuario, cpf: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded mr-2"
                  />
                  <input
                    type="text"
                    value={editedUsuario.rg}
                    onChange={(e) =>
                      setEditedUsuario({ ...editedUsuario, rg: e.target.value })
                    }
                    className="p-2 border border-gray-300 rounded mr-2"
                  />
                  <div className="relative">
                    <input
                      type={isSenhaVisible ? 'text' : 'password'}
                      value={editedUsuario.senha}
                      onChange={(e) =>
                        setEditedUsuario({ ...editedUsuario, senha: e.target.value })
                      }
                      className="p-2 border border-gray-300 rounded mr-2"
                    />
                    <button
                      type="button"
                      onClick={handleToggleSenhaVisibility}
                      className="absolute right-0 top-0 bottom-0 px-3 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        {isSenhaVisible ? (
                          <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
                        ) : (
                          <>
                            <path d="M12 19.5A7.5 7.5 0 1 0 12 4.5v15z" />
                            <path d="M12 8v4M8 12h4" />
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSaveEditUsuario}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditingUsuarioId(null)}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{usuario.nome}</h3>
                  <p className="text-gray-500">
                    E-mail: {usuario.email}
                    <br />
                    Senha: {isSenhaVisible ? usuario.senha : '*'.repeat(usuario.senha.length)}
                    <br />
                    CRF: {usuario.crf}
                    <br />
                    CPF: {usuario.cpf}
                    <br />
                    RG: {usuario.rg}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleEditUsuario(usuario)}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteUsuario(usuario.id)}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </>
  );
};

export default CadastroUsuarios;
