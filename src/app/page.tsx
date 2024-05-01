import React from "react";
import styles from "@/styles/home.module.css"
import Header from "@/components/Header";

export default function Home() {

  return (
    <section className={`${styles.container}`}>
        <header className={`${styles.header}`}>
          <Header />
        </header>

        <div className={`${styles.content}`}>
          <h1 className="flex items-center justify-center text-5xl h-[200vh]">
            HI
          </h1>

          <aside className="bg-white">
          </aside>
        </div>
    </section>
  );
}
