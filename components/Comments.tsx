import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import NoResults from './NoResults';
import { IUser } from '../types';

interface IProps {
    isPostingComment: boolean;
    comment: string;
    setComment: Dispatch<SetStateAction<string>>;
    addComment: (e: React.FormEvent) => void;
    comments: IComment[];
}

interface IComment {
    comment: string;
    length?: number;
    _key: string;
    postedBy: { _ref?: string; _id?: string };
}
const Comments = ({ comment, setComment, addComment, isPostingComment }: IProps) => {
    let comments = [];
    return (
        <div className='border-t-2 border-gray-200 pt-4 px-10 mt-4 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]'>
            <div className='overflow-scroll lg:h-[457px]'>
                {comments?.length ? (
                    <div>
                        videos
                    </div>
                ) : (
                    <NoResults text="No Comments Yet! Be the first one to add a comment." />
                )}
            </div>
        </div>
    );
};

export default Comments;
// by Rokas with ❤️
