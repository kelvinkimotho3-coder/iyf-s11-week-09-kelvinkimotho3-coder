import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
    return (
        <div className="layout">
            <header>
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
                        Home
                    </NavLink>
                    <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''}>
                        Posts
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                        About
                    </NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>&copy; 2026 CommunityHub</p>
            </footer>
        </div>
    );
}

export default Layout;