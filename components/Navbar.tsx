import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

import { createOrGetUser } from '../utils';
import Logo from '../utils/tiktik-logo.png';
import useAuthStore from '../store/authStore';

const Navbar = ({}) => {
    const user = false;
    const { userProfile, addUser, removeUser } = useAuthStore();

    return (
        <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
            <Link href="/">
                <div className="w-[100px] md:w-[129px]">
                    <Image
                        className='cursor-pointer'
                        src={Logo}
                        alt='logo'
                        width={150}
                        height={150}
                    />
                </div>
            </Link>

            <div>
                SEARCH
            </div>

            <div>
                {userProfile ? (
                    <div>
                        {userProfile?.userName}
                    </div>
                ) : (
                    <GoogleLogin
                        onError={() => console.log('Login Failed')}
                        onSuccess={(response) => createOrGetUser(response, addUser)}
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
// by Rokas with ❤️
