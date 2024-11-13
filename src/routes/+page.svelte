<script lang="ts">
	export let data;
	const sertifikasi = data.sertifikasi.items;
	const tim = data.tim;
	const berita = data.berita.items;
</script>

<!-- Main Content -->
<div
	class="flex flex-col md:flex-row justify-between items-start w-[95%] mx-auto mt-8"
	data-aos="zoom-in"
>
	<!-- Bagian kiri -->
	<div class="w-full md:w-1/2 m-2 md:m-5">
		<p class="font-bold text-3xl md:text-5xl mb-4">Astekindo Maluku</p>
		<div class="w-full mx-auto">
			<p class="text-justify text-sm md:text-base mb-4">
				Astekindo adalah singkatan dari Asosiasi Tenaga Teknik Indonesia. Ini adalah organisasi yang
				dibentuk untuk menghimpun para profesional teknik di Indonesia, baik yang bekerja di sektor
				pemerintah maupun swasta. Tujuan utama dari Astekindo adalah untuk meningkatkan kompetensi,
				profesionalisme, dan kesejahteraan para anggotanya serta untuk memajukan bidang teknik di
				Indonesia.
			</p>
		</div>
		<div class="flex justify-center md:justify-between items-center mb-4 hidden md:flex">
			<div class="flex flex-col items-center bounce">
				<img src="bnsp.png" alt="" class="h-24 md:h-48 w-auto mb-2" data-aos="zoom-in-up" />
				<img src="lpjk.jpg" alt="" class="h-24 md:h-48 w-auto" data-aos="zoom-in-up" />
			</div>
			<img src="P3SM.jpg" alt="" class="h-24 md:h-48 w-auto bounce" data-aos="zoom-in-left" />
		</div>
	</div>

	<!-- Bagian kanan, hidden on mobile -->
	<div class="w-full md:w-1/2 flex justify-center items-center hidden md:flex" data-aos="zoom-in">
		<img src="astekindo.png" alt="" class="h-48 md:h-96 w-auto bounce mt-4" />
	</div>
</div>

<!-- Grid SKK -->
<div class="w-[95%] max-w-6xl mx-auto mt-8" data-aos="zoom-in">
	{#if sertifikasi}
		<div class="text-center mb-6">
			<p class="text-xl md:text-2xl font-bold">Daftar SKK Pada Astekindo Maluku</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
			{#each sertifikasi as sertifikasi}
				{#if sertifikasi.jenis_sertifikasi == 'skk'}
					<div
						class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
						data-aos="zoom-in"
					>
						<a href="/sertifikasi/{sertifikasi.id}">
							<div class="overflow-hidden">
								<img
									class="w-full h-32 md:h-48 object-cover transition-transform duration-500 hover:scale-110"
									src="https://astekindomaluku.pockethost.io/api/files/{sertifikasi.collectionId}/{sertifikasi.id}/{sertifikasi.foto_sertifikasi}"
									alt={sertifikasi.nama_sertifikasi}
								/>
							</div>
							<div class="p-4 md:p-6">
								<h3
									class="text-lg md:text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300"
								>
									{sertifikasi.nama_sertifikasi}
								</h3>
							</div>
						</a>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<!-- Grid Tim -->
<div class="w-[95%] max-w-6xl mx-auto mt-8" data-aos="zoom-in">
	{#if tim !== null || 0 || undefined}
		<div class="text-center mb-6">
			<p class="text-xl md:text-2xl font-bold">Tim Astekindo Maluku</p>
		</div>
	{/if}

	<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
		{#each tim as tim}
			<div
				class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
			>
				<img
					class="w-32 md:w-40 h-32 md:h-40 object-cover transition-transform duration-500 hover:scale-110 rounded-full mx-auto mt-4 md:mt-6"
					src="https://astekindomaluku.pockethost.io/api/files/{tim.collectionId}/{tim.id}/{tim.avatar}"
					alt={tim.name}
				/>
				<div class="p-4 md:p-6 text-center">
					<h3 class="text-lg md:text-xl font-bold uppercase text-gray-800 mb-1 md:mb-2">
						{tim.name}
					</h3>
					<p class="text-xs md:text-sm text-gray-600">{tim.role}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Grid Berita -->
<div class="w-[95%] max-w-6xl mx-auto mt-8" data-aos="zoom-in">
	<div class="text-center mb-6">
		<p class="text-xl md:text-2xl font-bold">Info Berita</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
		{#each berita as item}
			<a href="/berita/{item.id}">
				<div
				class="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
			>
				<img
					class="w-32 md:w-40 h-32 md:h-40 object-cover transition-transform duration-500 hover:scale-110 rounded-full mx-auto mt-4 md:mt-6"
					src="https://astekindomaluku.pockethost.io/api/files/{item.collectionId}/{item.id}/{item.foto_berita}"
					alt={item.nama_anggota}
				/>
				<div class="p-4 md:p-6 text-center">
					<h3 class="text-lg md:text-xl font-bold uppercase text-gray-800 mb-1 md:mb-2">
						{item.nama_berita}
					</h3>
				</div>
			</div></a>
		{/each}
	</div>
</div>

<!-- Google Maps -->
<div class="relative w-full h-0 pb-[56.25%] md:pb-[35%] mt-6" data-aos="zoom-in">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11426.13575334434!2d128.1837023!3d-3.6957756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce966e24aafaf%3A0xf2548d53c5f1f4f8!2sAstekindo%20Maluku!5e0!3m2!1sid!2sid!4v1690221661858!5m2!1sid!2sid"
		class="absolute top-0 left-0 w-full h-full"
		loading="lazy"
	></iframe>
</div>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	.bounce {
		animation: bounce 2s infinite;
	}
</style>
