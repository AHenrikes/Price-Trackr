import React from "react";
import styles from "@/styles/home.module.css"
import Header from "@/components/Header";

export default function Home() {

  return (
    <div className={`${styles.container}`}>
      <aside className="bg-red-500">
      </aside>

      <section className={`${styles.main}`}>
        <header className={`${styles.header} bg-blue-800`}>
          <Header />
        </header>

        <div className={`${styles.content}`}>
          <h1 className="flex items-center justify-center text-9xl">
            main
          </h1>

          <aside className="bg-white">
          </aside>
        </div>
      </section>
    </div>
  );
}
