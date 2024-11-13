import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const id = params.id;
    const berita = await pb.collection('berita').getOne(id);
    return {berita};
}) satisfies PageServerLoad;