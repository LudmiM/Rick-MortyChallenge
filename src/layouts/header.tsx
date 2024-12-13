import { Link, Outlet } from 'react-router'

export default function Layout() {
     return (
      <header className="bg-slate-600">
        <div className="logo">
          <Link to={"/"}>
            <img src="/rick.png" alt="Logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
          </ul>
        </nav>
        <Outlet />
      </header>
    );
}
