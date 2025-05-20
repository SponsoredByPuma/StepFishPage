<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>


<div class="min-h-screen flex flex-col bg-green-200">
{@render children()}
</div>


