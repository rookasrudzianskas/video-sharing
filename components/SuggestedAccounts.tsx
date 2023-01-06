import React, { useEffect } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import { IUser } from '../types';

interface IProps {
    fetchAllUsers: () => void;
    allUsers: IUser[];
}
const SuggestedAccounts: NextPage<IProps> = ({ fetchAllUsers, allUsers }) => {
    return (
        <div>

        </div>
    );
};

export default SuggestedAccounts;
// by Rokas with ❤️
