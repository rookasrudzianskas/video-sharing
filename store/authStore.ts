import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

import { BASE_URL } from '../utils';

const authStore = (set: any) => ({
    userProfile: null,
    allUsers: [],
});
