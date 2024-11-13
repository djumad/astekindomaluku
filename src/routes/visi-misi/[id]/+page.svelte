<script>
    import { onMount } from 'svelte';

    export let data;
    let safeContent = '';
    const visiMisi = data.visiMisi;

    onMount(() => {
        safeContent = sanitizeHtml(data.visiMisi.isi);
    });

    function sanitizeHtml(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.innerHTML;
    }
</script>

<div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
    <p class="text-5xl font-bold text-center text-black mb-4">{data.visiMisi.judul}</p>
    <div class="prose prose-lg mx-auto">
        <img src="https://astekindomaluku.pockethost.io/api/files/{visiMisi.collectionId}/{visiMisi.id}/{visiMisi.foto_sertifikasi}" alt="" width="350">
        {@html safeContent}
    </div>
</div>
