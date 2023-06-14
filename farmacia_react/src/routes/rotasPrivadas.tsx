import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login"

export const RotasPrivadas = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}