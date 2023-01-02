import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TikTok</title>
        <link rel="icon" href="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_1280.png" />
      </Head>

      TikTok
    </div>
  )
}

export default Home
