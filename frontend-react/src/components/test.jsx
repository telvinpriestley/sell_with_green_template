const TestComponent = () => {
    return (
        <header className="bg-dark">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Main Menu
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Option 1</a></li>
                                    <li><a className="dropdown-item" href="#">Option 2</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item dropdown-toggle" href="#" id="navbarDropdownSubMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Submenu
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownSubMenuLink">
                                            <li><a className="dropdown-item" href="#">Submenu Option 1</a></li>
                                            <li><a className="dropdown-item" href="#">Submenu Option 2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default TestComponent;
