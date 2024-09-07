'use client';
import styles from './header.module.css';
import Button from '@/components/button/Button';

type Props = {
    showGetStarted: boolean
}

function Header({ showGetStarted }: Props) {
    const clickHandler = () => {
        window.location.href = '/'
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo} onClick={clickHandler}>Friend Finder</div>
            {showGetStarted && <a href="/signup"><Button title="Get Started" role='default' /></a>}
        </div>
    );
}
export default Header;
