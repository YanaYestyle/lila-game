"use client";
import home from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div className={home.container}>
        <div className={home.image}></div>
        <div className={home.column}>
          <h1>Column</h1>
        </div>
      </div>
    </>
  );
}
