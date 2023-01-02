import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import {visionTool} from '@sanity/vision'
import schemas from './schemas/index';

export default defineConfig({
    name: 'default',
    title: 'sanity-backend',

    projectId: '9fjvj0iy',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemas,
    },
})
