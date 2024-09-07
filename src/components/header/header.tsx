import styles from './header.module.css';
import Button from '@/components/button/Button';

function Header() {
    return (
        <div className={styles.container}>
            <div>
                Friend Finder
            </div>
            <Button title="Get Started" />
        </div>
    );
}
export default Header;
