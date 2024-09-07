import styles from "./page.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Button from "@/components/button/Button";
import Image from "next/image";

export default function Home() {
    const btnStyle = {}
  return (
    <main>
      <Header showGetStarted={true} />
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.heading}>Explore and engage with</h1>
                <p>Connect with others based on interests.</p>
                <div className={styles.btnContainer}>
                    <a href="/signup"><Button title="Get started" role='default' path='/signup' /></a>
                </div>
            </div>
            <div className={styles.right}>
                {/* <Image src='/img/friends.jpg' fill alt="image" />  */}
                <img src="/img/friends.jpg" alt="test" className={styles.image}/>
            </div>
        </div>
        <div className={styles.subcontainer}>
            <p>Discover new connections and expand your network.</p>
            <div className={styles.loginContainer}>
                Already have an account? <a href="/login" className={styles.login}>Log In</a>
            </div>
        </div>
        <Footer />
    </main>
  );
}
