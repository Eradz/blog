import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 ">
      <Head>
        <title>Chidi's Blog</title>
        <link rel="icon" href="/bg.jpg" />
      </Head>
    </div>
  )
}

export default Home
