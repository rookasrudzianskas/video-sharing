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

const Navbar = ({}) => {
    return (
        <div>
            <Link href="/">
                <div>
                    <Image src={Logo} className="cursor-pointer" alt="Logo" width={50} height={50} />
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
// by Rokas with ❤️
