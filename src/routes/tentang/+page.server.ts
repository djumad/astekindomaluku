import pb from "$lib/pb";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const records = await pb.collection('tentang_astekindo').getFullList({
    sort: '-created',
});
    return{
        tentang
    }
};
