import { useState } from "react";
import { Sidebar } from "./sidebar";

export const Medicamentos = () => {
  const [medicamentos, setMedicamentos] = useState([
    { id: 1, nome: 'Paracetamol', quantidade: 10, descricao: 'Medicamento para dor e febre' },
    { id: 2, nome: 'Ibuprofeno', quantidade: 15, descricao: 'Anti-inflamatório e analgésico' },
    { id: 3, nome: 'Dipirona', quantidade: 5, descricao: 'Analgésico e antitérmico' },
  ]);

  const [editingMedicamentoId, setEditingMedicamentoId] = useState(null);
  const [editedMedicamentoNome, setEditedMedicamentoNome] = useState('');
  const [editedMedicamentoQuantidade, setEditedMedicamentoQuantidade] = useState('');
  const [editedMedicamentoDescricao, setEditedMedicamentoDescricao] = useState('');

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleDelete = (medicamentoId: any) => {
    const updatedMedicamentos = medicamentos.filter(
      (medicamento: any) => medicamento.id !== medicamentoId
    );
    setMedicamentos(updatedMedicamentos);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAdd = () => {
    const newMedicamento = {
      id: Math.random(),
      nome: editedMedicamentoNome,
      quantidade: editedMedicamentoQuantidade,
      descricao: editedMedicamentoDescricao
    };
    setMedicamentos([...medicamentos, newMedicamento] as any);
    setEditedMedicamentoNome('');
    setEditedMedicamentoQuantidade('');
    setEditedMedicamentoDescricao('');
  };

  const handleEdit = (medicamentoId: any) => {
    const medicamento = medicamentos.find((m: any) => m.id === medicamentoId);
    if (medicamento) {
      setEditingMedicamentoId(medicamentoId);
      setEditedMedicamentoNome(medicamento.nome);
      setEditedMedicamentoQuantidade(medicamento.quantidade as any);
      setEditedMedicamentoDescricao(medicamento.descricao);
    }
  };

  const handleSaveEdit = () => {
    const updatedMedicamentos = medicamentos.map((medicamento: any) => {
      if (medicamento.id === editingMedicamentoId) {
        return {
          ...medicamento,
          nome: editedMedicamentoNome,
          quantidade: editedMedicamentoQuantidade,
          descricao: editedMedicamentoDescricao,
        };
      }
      return medicamento;
    });

    setMedicamentos(updatedMedicamentos);
    setEditingMedicamentoId(null);
    setEditedMedicamentoNome('');
    setEditedMedicamentoQuantidade('');
    setEditedMedicamentoDescricao('');
  };

  const handleCancelEdit = () => {
    setEditingMedicamentoId(null);
    setEditedMedicamentoNome('');
    setEditedMedicamentoQuantidade('');
    setEditedMedicamentoDescricao('');
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
      <h2 className="text-2xl font-bold mb-4">Lista de Medicamentos</h2>
    <div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={editedMedicamentoNome}
          onChange={(e) => setEditedMedicamentoNome(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
          placeholder="Nome do Medicamento"
        />
        <input
          type="number"
          value={editedMedicamentoQuantidade}
          onChange={(e) => setEditedMedicamentoQuantidade(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
          placeholder="Quantidade"
        />
        <input
          type="text"
          value={editedMedicamentoDescricao}
          onChange={(e) => setEditedMedicamentoDescricao(e.target.value)}
          className="p-2 border border-gray-300 rounded mr-2"
          placeholder="Descrição"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Adicionar Medicamento
        </button>
      </div>
      <ul className="space-y-4">
        {medicamentos.map((medicamento) => (
          <li
            key={medicamento.id}
            className="bg-gray-100 p-4 rounded flex items-center justify-between"
          >
            <div>
              {editingMedicamentoId === medicamento.id ? (
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    value={editedMedicamentoNome}
                    onChange={(e) => setEditedMedicamentoNome(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Nome do Medicamento"
                  />
                  <input
                    type="number"
                    value={editedMedicamentoQuantidade}
                    onChange={(e) =>
                      setEditedMedicamentoQuantidade(e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Quantidade"
                  />
                  <input
                    type="text"
                    value={editedMedicamentoDescricao}
                    onChange={(e) =>
                      setEditedMedicamentoDescricao(e.target.value)
                    }
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Quantidade"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <h3 className="font-bold">{medicamento.nome}</h3>
                  <span className="text-gray-500">
                    Quantidade: {medicamento.quantidade}
                  </span>
                  <span className="text-gray-500">
                    Descrição: {medicamento.descricao}
                  </span>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              {editingMedicamentoId === medicamento.id ? (
                <>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-blue-500 text-white font-bold py-1 px-2 rounded"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-red-500 text-white font-bold py-1 px-2 rounded"
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(medicamento.id)}
                    className="bg-blue-500 text-white font-bold py-1 px-2 rounded"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(medicamento.id)}
                    className="bg-red-500 text-white font-bold py-1 px-2 rounded"
                  >
                    Deletar
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </>
  );
};