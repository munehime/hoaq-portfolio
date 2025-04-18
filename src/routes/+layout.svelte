<script lang="ts">
    import { afterNavigate, disableScrollHandling } from "$app/navigation";
    import { page } from "$app/state";
    import Header from "$lib/components/header/Header.svelte";
    import type { Snippet } from "svelte";
    import "../styles/app.css";

    const { children }: { children: Snippet } = $props();

    afterNavigate(() => {
        disableScrollHandling();
        setTimeout(() => {
            scrollTo({ top: 0, behavior: "instant" });
        }, 300);
    });
</script>

<div class="root-layout font-sans">
    {#if page.url.pathname !== "/"}
        <Header />
    {/if}
    {@render children?.()}
</div>

<style lang="postcss">
    :global(body) {
        background-color: #121212;
        color: #bdc1c6;
    }

    .root-layout {
        height: 100%;
    }
</style>
