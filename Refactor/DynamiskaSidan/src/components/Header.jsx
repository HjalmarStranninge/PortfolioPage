

export default function Header() {
    return (
        <>
            <header>
                <a href="./index.html" id="logo">Portf<span>olio</span></a>
                <nav>
                    <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
                    <ul className="menu">
                        <li><a className="active" href="./index.html">home</a></li>
                        <li><a href="./about.html">about</a></li>
                        <li><a className="github-btn">github</a></li>
                    </ul>
                </nav>
                <a className="github-btn">github</a>
                <div className="ham-menu">
                    <label for="nav-toggle">
                        <i className="fa-solid fa-burger"></i>
                    </label>
                </div>
            </header>
        </>
    )
}