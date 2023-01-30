import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter()
  console.log(router)
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])


  return (
    <div className="not-found">
      <p>Блять пиздец чет страница не найдена</p>
      <Link href="/">Жми суды нахуй</Link>
    </div>
  );
};

export default NotFoundPage;
