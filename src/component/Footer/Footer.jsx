import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css"
import HomeIconActive from "../../assets/img/HomeIconActive.svg";
import HomeIconInactive from "../../assets/img/HomeIconInactive.svg";
import NewVideoActive from "../../assets/img/NewVideoActive.svg";
import NewVideoInactive from "../../assets/img/NewVideoInactive.svg";
import Logo from "../../assets/img/Logo.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? <><img className={styles.icon} src={HomeIconActive} alt="home" />Home</> : <img className={styles.icon} src={HomeIconInactive} alt="home" />}
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink
                            to="/newvideo"
                            className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}`}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? <><img className={styles.icon} src={NewVideoActive} alt="newvideo" />New Video</> : <img className={styles.icon} src={NewVideoInactive} alt="newvideo" />}
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <img className={styles.logo} src={Logo} alt="Logo" />
        </footer>
    );
};

export default Footer;