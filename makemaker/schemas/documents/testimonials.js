import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'ujsokhwu',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
   token: '',
});

const builder = imageUrlBuilder(client);

export const  urlFor = (source) => builder.image(source);