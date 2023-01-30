import Image from "next/image";
import style from "../../../styles/Burgers.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((item, index) => {
    return { params: { id: item.id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: { burger: data },
  };
};

const Details = (props) => {
  const { burger } = props;

  return (
    <div className={style.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={style.imageContainer}>
        <Image src={burger.image} alt="burger" width={100} height={100} />
      </div>
      <article>
        <p>{burger.desc}</p>
      </article>
    </div>
  );
};

export default Details;
