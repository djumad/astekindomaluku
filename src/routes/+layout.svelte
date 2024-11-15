<script>
	import '../app.css';
	import "aos/dist/aos.css";
	import Aos from 'aos';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
    export let data;
    const visiMisi = data.visiMisi;
    
	onMount(() => {
		Aos.init();
	});
	
	let isDropdownOpen = false;
	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
</script>

<svelte:head>
	<title>Astekindo Maluku</title>
</svelte:head>

<!-- Navbar -->
<script context="module" lang="ts">
    export const match = ({ url }) => {
        return !/^\/login(\/.*)?$/.test(url.pathname) && !/^\/admin(\/.*)?$/.test(url.pathname) && !/^\/form-skk(\/.*)?$/.test(url.pathname);
    };
</script>

{#if match($page)}
    <nav
        class="bg-white border border-blue-300 w-[95%] mx-auto rounded-l-full rounded-r-full p-4 text-gray-800 shadow-lg transition duration-300 hover:shadow-xl mt-1.5 sticky top-0 z-50"
    >
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <div class="text-2xl font-bold ml-3">
                <a href="/" class="hover:text-blue-600 transition duration-200">Astekindo Maluku</a>
            </div>

            <!-- Menu Items -->
            <ul class="flex space-x-6">
                <li><a href="/" class="hover:text-blue-600 transition duration-200">Beranda</a></li>
                
                <!-- Dropdown for Visi Misi -->
                <li class="relative">
                    <button 
                        on:click={toggleDropdown} 
                        class="hover:text-blue-600 transition duration-200"
                    >
                        Tentang Kami
                    </button>
                    {#if isDropdownOpen}
                        <div class="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48">
                            {#each visiMisi as element}
                                <a 
                                    href="/visi-misi/{element.id}" 
                                    class="block px-4 py-2 hover:bg-blue-100 text-gray-800"
                                    on:click={() => isDropdownOpen = false} >
                                    {element.judul}
                                </a>
                            {/each}
                        </div>
                    {/if}
                </li>

                <li><a href="/galeri" class="hover:text-blue-600 transition duration-200">Galeri</a></li>
                <li><a href="/layanan" class="hover:text-blue-600 transition duration-200">Layanan</a></li>
            </ul>
        </div>
    </nav>
{/if}

<slot />

{#if $page.url.pathname !== '/login' && $page.url.pathname !== "/form-skk"}
	<footer class="bg-gray-800 text-white py-4">
		<div class="text-center mt-4">
			<p class="text-sm">© 2024 Astekindo Maluku. All rights reserved.</p>
		</div>
	</footer>
{/if}
