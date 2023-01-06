import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import axios from 'axios';

import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { IUser, Video } from '../../types';
import { BASE_URL } from '../../utils';

interface IProps {
    data: {
        user: IUser;
        userVideos: Video[];
        userLikedVideos: Video[];
    };
}

const Profile = ({data}: IProps) => {
    const [showUserVideos, setShowUserVideos] = useState<Boolean>(true);
    const [videosList, setVideosList] = useState<Video[]>([]);


    return (
        <div className="w-full">
            Profile
        </div>
    );
};

export default Profile;
// by Rokas with ❤️
