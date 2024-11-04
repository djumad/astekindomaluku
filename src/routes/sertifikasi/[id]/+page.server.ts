import pb from "$lib/pb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const id = params.id;
    const sertifikasi = await pb.collection('sertifikasi').getOne(id);

    return{
        sertifikasi
    }
};