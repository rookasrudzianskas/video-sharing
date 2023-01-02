import type { NextApiRequest, NextApiResponse } from 'next';

import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';
