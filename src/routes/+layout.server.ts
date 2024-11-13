import pb from '$lib/pb';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    const visiMisi = await pb.collection('visi_misi').getFullList();

    return {visiMisi};
}) satisfies LayoutServerLoad;
