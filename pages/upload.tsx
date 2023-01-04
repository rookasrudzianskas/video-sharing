import React, { useEffect, useState } from 'react';
import { SanityAssetDocument } from '@sanity/client';
import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

import useAuthStore from '../store/authStore';
import { BASE_URL } from '../utils';
import { client } from '../utils/client';
import { topics } from '../utils/constants';
const Upload = ({}) => {
    const [caption, setCaption] = useState('');
    const [topic, setTopic] = useState<String>(topics[0].name);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [savingPost, setSavingPost] = useState<Boolean>(false);
    const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>();
    const [wrongFileType, setWrongFileType] = useState<Boolean>(false);
    const uploadVideo = async (e: any) => {
        const selectedFile = e.target.files[0];
        const fileTypes = ['video/mp4', 'video/webm', 'video/ogg'];

        if(fileTypes.includes(selectedFile.type)) {
            setWrongFileType(false);
            setIsLoading(true);

            client.assets
                .upload('file', selectedFile, {
                    contentType: selectedFile.type,
                    filename: selectedFile.name,
                })
                .then((data) => {
                    setVideoAsset(data);
                    setIsLoading(false);
                });

        } else {
            setIsLoading(false);
            setWrongFileType(true);
        }
    }

    return (
        <div className="flex w-full h-full">
            <div className="bg-white rounded-lg">
                <div>
                    <div>
                        <p className="text-2xl font-bold">Upload Video</p>
                        <p className="text-md text-gray-400 mt-1">Post a video to your account</p>
                    </div>
                    <div className="border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
                        {isLoading ? (
                            <p>Uploading...</p>
                        ) : (
                            <div>
                                {videoAsset ? (
                                    <div>

                                    </div>
                                ) : (
                                    <label className='cursor-pointer'>
                                        <div className='flex flex-col items-center justify-center h-full'>
                                            <div className='flex flex-col justify-center items-center'>
                                                <p className='font-bold text-xl'>
                                                    <FaCloudUploadAlt className='text-gray-300 text-6xl' />
                                                </p>
                                                <p className='text-xl font-semibold'>
                                                    Select video to upload
                                                </p>
                                            </div>

                                            <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                                                MP4 or WebM or ogg <br />
                                                720x1280 resolution or higher <br />
                                                Up to 10 minutes <br />
                                                Less than 2 GB
                                            </p>
                                            <p className='bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                                                Select file
                                            </p>
                                        </div>
                                        <input
                                            type='file'
                                            name='upload-video'
                                            onChange={(e) => uploadVideo(e)}
                                            className='w-0 h-0'
                                        />
                                    </label>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;
// by Rokas with ❤️
