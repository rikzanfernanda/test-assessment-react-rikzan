import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate
} from 'react-router-dom'
import { getAuthToken } from '../context/authContext'
import EditUser from '../pages/EditUser'
import Home from '../pages/Home'
import NewUser from '../pages/NewUser'
import { PATH } from './path'

const ProtectedRoute = () => {
    return getAuthToken() ? <Outlet /> : <Navigate to={PATH.HOME} />
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Outlet />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path={PATH.NEW_USER} element={<NewUser />} />
                    <Route path={PATH.USER + '/:id'} element={<EditUser />} />
                </Route>
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
