import Head from 'next/head'
import Product from './product'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=" w-full">
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-1 flex-col justify-center items-center w-full  max-w-[1920px]">
        {/* In this test, he is the homepage */}
        <Product />
      </main>
    </div>
  )
}
