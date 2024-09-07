import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.container}>
            <p>&copy; 2024 Friend Finder. All rights reserved.</p>
            <p>Connect with friends and the world around you on Friend Finder</p>
   
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li className={styles.anchor}><a href="/">About</a></li>
                    <li className={styles.anchor}><a href="/">Privacy</a></li>
                    <li className={styles.anchor}><a href="/">Terms</a></li>
                    <li className={styles.anchor}><a href="/">Help</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer;