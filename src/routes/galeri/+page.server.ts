import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const sertifikasi = await pb.collection('sertifikasi').getList(1 , 50 , {
        expand : 'users_id'
    });
    console.log(sertifikasi);
    return {
        sertifikasi, 
    }
}) satisfies PageServerLoad;
