<script lang="ts">
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Paperclip from '@lucide/svelte/icons/paperclip';
	import Calendar from '@lucide/svelte/icons/calendar';
	import CircleUser from '@lucide/svelte/icons/circle-user';
	import Menu from '@lucide/svelte/icons/menu';

	let { children } = $props();
  export const prerender = true;
</script>


<div class="min-h-screen flex flex-col bg-green-200">
	<AppBar headlineClasses="sm:hidden" centerClasses="hidden sm:block">
  {#snippet lead()}
  <ArrowLeft/>
  {/snippet}
  {#snippet trail()}
    <div class="hidden space-x-4 sm:flex">
      <Paperclip size={20} />
      <Calendar size={20} />
      <CircleUser size={20} />
    </div>
    <div class="block sm:hidden">
      <Menu size={20} />
    </div>
  {/snippet}
  {#snippet headline()}
    <h2 class="h2">Step Fish</h2>
  {/snippet}
  <span>Step Fish</span>
</AppBar>
{@render children()}
</div>


