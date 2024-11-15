import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const id = params.id;
    const visiMisi = await pb.collection('Tentang_Kita').getOne(id);
    return {visiMisi};
}) satisfies PageServerLoad;
