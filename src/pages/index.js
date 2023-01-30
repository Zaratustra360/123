import Link from "next/link";
import style from "../../styles/Home.module.css";
import Image from "next/image";
import fatBurger from '../../public/fatburger.png'
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head><title>Жирная хуета | Главная</title></Head>
      <h1 className={`${style.title} font-effect-fire-animation`}>Главная</h1>
      <div className={style.mainImage}>
        <Image src={fatBurger} alt='burger'/>
      </div>
      <p className={style.text}>
        Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное
        мясо. О других составляющих начинки можно поспорить, ведь это дело
        вкуса.
      </p>
      <p className={style.text}>
        Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
        обслуживания, правильная атмосфера заведения.
      </p>
      <Link className={style.btn} href="/burgers">
        Все бургеры
      </Link>
    </>
  );
}
