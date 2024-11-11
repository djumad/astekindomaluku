<script>
    import { onMount } from 'svelte';

    export let data;
    let safeContent = '';
    const sertifikasi = data.tentang;
</script>

<div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
    <p class="text-5xl font-bold text-center text-black mb-4">Tentang Astekindo Maluku</p>
    {#each sertifikasi in sertifikasi}
        <div class="prose prose-lg mx-auto">
        <img src="https://astekindomaluku.pockethost.io/api/files/{sertifikasi.collectionId}/{sertifikasi.id}/{sertifikasi.foto}" alt="" width="350">
        <p>{sertifikasi.isi}</p>
    </div>
    {/each}
</div>
