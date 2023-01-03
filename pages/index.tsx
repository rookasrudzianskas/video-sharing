import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import {Video} from "../types";
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';

interface IProps {
    videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className="">
      <Head>
        <title>TikTok</title>
        <link rel="icon" href="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_1280.png" />
      </Head>

      <div className="flex flex-col gap-10 videos h-full">
          {videos.length ? (videos.map((video: Video) => (
              <VideoCard post={video} key={video._id} />
          ))) : (
              <NoResults text={'No results found'} />
          )}
      </div>
    </div>
  )
}

export default Home;

export const getServerSideProps = async () => {
    let { data } = await axios.get(`http://localhost:3000/api/post`);

    return {
        props: {
            videos: data
        }
    }
}
