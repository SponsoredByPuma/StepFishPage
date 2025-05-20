<div class="size-full">
    <div class="m-4">
        <h1 class="text-3xl font-bold text-blue-600 ">Welcome to SvelteKit</h1>
        <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
        <button on:click={handleClick}> test me </button>
    </div>
</div>

<script lang="ts">
  import { goto } from '$app/navigation';

  function handleClick() {
    goto('/dataprivacypolicy');
  }
</script>
