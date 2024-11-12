<script>
    import { onMount } from 'svelte';

    export let data;
    let safeContent = '';
    const tentang = data.tentang;
    console.log(tentang);

    onMount(() => {
        safeContent = sanitizeHtml(data.tentang.isi);
    });

    function sanitizeHtml(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.innerHTML;
    }
</script>

<div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
    <p class="text-5xl font-bold text-center text-black mb-4">Tentang Astekindo</p>
    <div class="prose prose-lg mx-auto">
        {@html safeContent}
    </div>
</div>
