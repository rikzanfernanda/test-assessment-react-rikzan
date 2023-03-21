import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Outlet />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
