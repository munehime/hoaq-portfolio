<script lang="ts">
    import { page } from "$app/stores";

    const isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;
</script>

<svelte:head>
    <title>{$page.status} | Hoaq</title>
</svelte:head>

<main>
    <div class="flex flex-col min-h-screen justify-center items-center px-12 sm:px-24 py-20">
        {#if isOnline}
            {#if $page.status === 404}
                <div>
                    <h1 class="text-8xl font-bold text-center">404</h1>
                    <div class="text-lg text-center">What are you doing here...?</div>
                </div>
            {:else}
                <div>
                    <h1 class="text-8xl font-bold text-center">500</h1>
                    <div class="text-lg text-center">Something went wrong...</div>
                </div>
            {/if}
        {:else}
            <div>
                <h1>It looks like you're offline</h1>
                <div>Reload the page once you've found the internet.</div>
            </div>
        {/if}
    </div>
</main>
