import pb from '$lib/pb';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    const status = await pb.collection('status').getFullList();
    const visiMisi = await pb.collection('visi_misi').getFullList();

    return {status , visiMisi};
}) satisfies LayoutServerLoad;