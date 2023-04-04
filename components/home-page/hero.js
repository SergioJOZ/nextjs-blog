import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sergio.jpg"
          alt="An image showing Sergio"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sergio Jiménez</h1>
      <p>
        I blog about web development - specially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}
