import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>TikTok</title>
        <link rel="icon" href="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_1280.png" />
      </Head>

      <h1>Hello World</h1>
    </div>
  )
}

export default Home;

export const getServerSideProps = async () => {
    let response = await axios.get();
}
