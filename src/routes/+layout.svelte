<script>
    import { page } from "$app/stores";
    import "../styles/app.css";
    import Header from "$lib/components/header/Header.svelte";
</script>

<div class="font-karla">
    {#if $page.url.pathname !== "/"}
        <Header />
    {/if}
    <slot />
</div>
