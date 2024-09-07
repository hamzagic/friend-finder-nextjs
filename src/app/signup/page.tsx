import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import styles from './page.module.css';
import Button from '@/components/button/Button';

const Signup = () => {
  return (
    <>
      <Header showGetStarted={false} />
      <div className={styles.container}>
        <div className={styles.signupContainer}>
          <div className={styles.formContainer}>
            <p className={styles.heading}>Create Account</p>
            <form>
              <div className={styles.inputContainer}>
                <label htmlFor="username">Username</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="text" className={styles.input} />
              </div>
              <Button title='Create Account' role='signup' />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Signup