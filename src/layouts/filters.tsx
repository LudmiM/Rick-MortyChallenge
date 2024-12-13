import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <>
            <nav className="nav-links">
            </nav>
            <Outlet />
        </>
    );
}
