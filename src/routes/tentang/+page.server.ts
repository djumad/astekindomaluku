import pb from "$lib/pb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const tentang = await pb.collection('tentang_astekindo').getOne('mkaeq77apcc89zx');
    return{
        tentang
    }
};
