<script>
	import { base } from '$app/paths';
</script>

<header class="flex w-full items-stretch justify-center ">
	<ul class="flex space-x-3 align-middle items-stretch">
		<li class="p-1 h-10 mr-10px">
			<a class="no-underline" sveltekit:prefetch href={`${base}/`}>Home</a>
		</li>
		<li class="p-1 h-10 mr-10px">
			<a class="no-underline" sveltekit:prefetch href={`${base}/blog/`}>Blog</a>
		</li>
		<li class="p-1 h-10 mr-10px">
			<a class="no-underline" sveltekit:prefetch href={`${base}/about`}>About</a>
		</li>
	</ul>
</header>
