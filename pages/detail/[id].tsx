import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { GoVerified } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';


// import Comments from '../../components/Comments';
import { BASE_URL } from '../../utils';
// import LikeButton from '../../components/LikeButton';
import useAuthStore from '../../store/authStore';
import { Video } from '../../types';
import axios from 'axios';

interface IProps {
    postDetails: Video;
}

const Detail = ({ postDetails }: IProps) => {
    const [post, setPost] = useState(postDetails);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
    const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');

    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();

    if(!post) return null;

    return (
        <div className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
            <div className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img">
                <div className="absolute top-6 left-2 lg:left-6 flex gap-6 z-50">
                    <p>
                        <MdOutlineCancel className="text-white text-[35px]" />
                    </p>
                </div>
                <div className="relative">
                    <div className="lg:h-[100vh] h-[60vh]">
                        <video
                            src={post.video.asset.url}
                        >

                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
// by Rokas with ❤️

export const getServerSideProps = async ({ params: { id }}) => {
    const res = await axios.get(`${BASE_URL}/api/post/${id}`);

    return {
        props: {
            postDetails: res.data
        }
    }
}
