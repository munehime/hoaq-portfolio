<script lang="ts">
    import TournamentsView from "$lib/components/staff-log/TournamentsView.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    const { tournaments } = data;
</script>

<svelte:head>
    <title>staff log | Hoaq</title>
    <meta name="description" content="Hi, I'm Hoaq" />
    <meta property="og:title" content="staff log | Hoaq" />
    <meta property="og:url" content="https://hoaq.id.vn/staff-log" />
    <meta property="og:description" content="Hi, I'm Hoaq" />
    <meta property="twitter:title" content="staff log | Hoaq" />
    <meta property="twitter:description" content="Hi, I'm Hoaq" />
</svelte:head>

<main>
    <div class="flex flex-col min-h-screen justify-center items-center px-12 sm:px-24 py-20">
        <div class="w-full max-w-[1625px] flex flex-col justify-between items-start">
            <div class="flex flex-col gap-4 justify-between items-start">
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">Staff log</div>
                    <div class="px-3 py-1 text-xl text-[#bdc1c6]">
                        Tracker of everything I’ve done as a tournament staff
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 justify-between items-start w-full mt-2 px-2">
                <div class="w-full">
                    <div class="pt-12">
                        <TournamentsView tournamentYears={tournaments} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
