import React from 'react';
import {NextPage} from "next";
import {Video} from "../types";

interface IProps {
    post: Video;
    isShowingOnHome?: boolean;
}

const VideoCard: NextPage<IProps> = ({ post: { caption, postedBy, video, _id, likes }, isShowingOnHome }) => {
    return (
        <div>

        </div>
    );
};

export default VideoCard;
// by Rokas with ❤️
