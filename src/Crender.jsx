
function Crender() {

    let isLoggedIn = false;
    return (
        <header className="header">
            <div className="icon">
                <i class="fa-solid fa-house"></i>
            </div>
            <nav className="nav-list">
                <ul>

                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        contact us
                    </li>
                    <li>
                        {!isLoggedIn ? "SignUp" : null}
                    </li>
                    <li>
                        {!isLoggedIn ? "Login" : null}
                    </li>
                </ul>
            </nav>

        </header>
    )
}






export default Crender