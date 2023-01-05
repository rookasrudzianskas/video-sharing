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

    return (
        <div>
            Hello
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
