import "../../styles/globals.css";
import Layout from "components/layout";
import {Balsamiq_Sans} from '@next/font/google'

const balsamiq = Balsamiq_Sans({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={balsamiq.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
}
