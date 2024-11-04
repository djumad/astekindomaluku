
import pb from '$lib/pb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const sertifikasi = await pb.collection('sertifikasi').getList(1 , 50 , {
        expand : 'users_id'
    });
    const tim = await pb.collection('tim_astekindo').getList(1 , 50 , {
        expand : 'users_id'
    })
    
    const berita = await pb.collection('berita').getList(1 , 50 , {
        expand : 'users_id'
    })
    const lokasi = await pb.collection('lokasi').getList(1 , 50 , {
        expand : 'users_id'
    })
    
    return {
        sertifikasi, tim, berita , lokasi
    }
    
}) satisfies PageServerLoad;