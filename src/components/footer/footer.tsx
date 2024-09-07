import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.container}>
            <p>&copy; 2024 Friend Finder. All rights reserved.</p>
            <p>Connect with friends and the world around you on Friend Finder</p>
   
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>About</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;