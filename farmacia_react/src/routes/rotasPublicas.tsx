import { Route, Routes } from "react-router-dom"
import CadastroUsuarios from "../components/cadastroUsuario"
import { Medicamentos } from "../components/medicamentos"

export const RotasPublicas = () => {
    return (
        <Routes>
            <Route path="/cadastro-user" element={<CadastroUsuarios />}></Route>
            <Route path="/home" element={<Medicamentos />}></Route>
        </Routes>
    )
}