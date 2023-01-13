import type { NextPage } from 'next'
import Head from 'next/head'
import { Side_content, Top_story } from '../components'

const Home: NextPage = () => {
  return (
    <div className=" ">
      <Head>
        <title>Chidi's Blog</title>
        <link rel="icon" href="/bg.jpg" />
      </Head>
      <Top_story/>
      <Side_content/>
    </div>
  )
}

export default Home
