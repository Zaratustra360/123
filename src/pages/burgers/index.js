import Image from "next/image";
import Link from "next/link";
import style from "../../../styles/Burgers.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

const Burgers = (props) => {
  const { burgers } = props;

  return (
    <div>
      <h2>Наши бургеры</h2>
      {burgers.map((item, index) => {
        return (
          <Link
            className={style.burgerCard}
            href={`/burgers/${item.id}`}
            key={index}
          >
            <div className={style.imageContainer}>
              <Image src={item.image} alt={item.name} width={100} height={100} />
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.desk}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Burgers;
