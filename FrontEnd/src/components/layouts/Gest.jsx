
import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '../../context/AuthContext'


export default function Gest() {
    const { user } = useAuthContext()

    return !user ? <Outlet /> : <Navigate to="/profile" />
}