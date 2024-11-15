import pb from '$lib/pb';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    const visiMisi = await pb.collection('tentang_kita').getFullList();

    return {visiMisi};
}) satisfies LayoutServerLoad;
