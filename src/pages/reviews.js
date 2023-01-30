import Head from "next/head";

const Reviews = (props) => {
  

  
  return (
    <>
      <Head>
        <title>Отзывы </title>
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className="reviews">
          {props.reviews.length && props.reviews.map((item, index) => {
            return (
              <div key={index} className='rewiew'>
                <p>{`Человек с id: ${item.id} оставил следующий комментарий: ${item.body}`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json()

  return{
    props: {
      reviews: data.slice(0, 20)
    }
  }
}

export default Reviews;
