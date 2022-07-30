import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Links Flashcards</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="./links">Links Page</a>
        </h1>

        <p className={styles.description}>
          Sign In to add your own
          <span style={{ display: "inline-block", marginLeft: "3px" }}>
            <a href="./dashboard">Link</a>
          </span>
        </p>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>
            Powered by <span className={styles.logo}>UN R.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;