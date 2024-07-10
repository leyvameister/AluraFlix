import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/img/Logo.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="Logo" />
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink
                            to="/newvideo"
                            className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                        >
                            New Video
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;