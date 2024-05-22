<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faPlay, faUser } from "@fortawesome/free-solid-svg-icons";
    import OsuIcon from "$lib/components/icons/OsuIcon.svelte";
    import SpreadsheetIcon from "$lib/components/icons/Spreadsheet.svelte";
    import BadgeIcon from "$lib/components/icons/Bagde.svelte";

    export let tournamentYear;

    let isOpen = false;

    function handleOnClick() {
        isOpen = !isOpen;
    }
</script>

<div class="py-4">
    <button class="flex justify-between w-full pb-2 border-b-4 border-b-[#bdc1c6]" on:click={handleOnClick}>
        <div class="flex items-center gap-3 text-left">
            <div class={"flex items-center transition-all duration-200 " + (isOpen ? "rotate-90" : "rotate-0")}>
                <FontAwesomeIcon icon={faPlay} class="w-3 h-3 text-white" />
            </div>
            <div class="font-bold text-lg">
                {tournamentYear.year}
            </div>
        </div>
        <div class="text-lg text-right">
            {`${tournamentYear.statistics.roles} roles in ${tournamentYear.statistics.tournaments} tournaments`}
        </div>
    </button>
    <div class={"overflow-hidden transition-all duration-200" + (isOpen ? "" : " hidden")}>
        <ul class="grid grid-cols-1 xl:grid-cols-2 min-[1625px]:grid-cols-3 gap-5 pt-4">
            {#each tournamentYear.tournaments as tournament, index (`${tournamentYear.year}-${index}`)}
                <li>
                    <div
                        class="grid grid-cols-[28px_minmax(0,_1fr)_90px] sm:grid-cols-[28px_minmax(0,_1fr)_146px] bg-[#1e1e1e]"
                    >
                        <div
                            class={"relative rotate-180 h-full pl-0.5" +
                                (tournament.status === "Concluded"
                                    ? " bg-[#bdc1c6]"
                                    : tournament.status === "Ongoing"
                                    ? " bg-[#a0ff7f]"
                                    : " bg-[#f5ff7f]") +
                                " text-black font-bold text-center vertical-lr select-none"}
                        >
                            {tournament.status}
                        </div>
                        <div class="p-2">
                            <div class="flex flex-col pb-1 border-b-2 border-b-[#bdc1c6]">
                                <div class="font-bold text-lg">
                                    {tournament.name}
                                </div>
                                <div class="text-[#bdc1c6] text-sm">
                                    {tournament.acronym}
                                </div>
                            </div>
                            <div class="flex flex-col pt-1">
                                <div class="font-bold text-sm">
                                    <FontAwesomeIcon icon={faUser} class="h-3 w-3 text-white" />
                                    <span>Role(s)</span>
                                </div>
                                <div class="text-[#bdc1c6] text-sm">
                                    {tournament.roles.join(", ")}
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <ul class="flex flex-col justify-around h-full select-none">
                                <li>
                                    {#if tournament.badge_url !== "none" && tournament.badge_url !== "pending"}
                                        <a href={tournament.badge_url} target="_blank" rel="noopener noreferrer">
                                            <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                <BadgeIcon class="w-3 sm:w-5 h-3 sm:h-5 fill-white" />
                                                <div class="text-xs sm:text-sm break-words">Badged</div>
                                            </div>
                                        </a>
                                    {:else}
                                        <div class="flex items-center gap-1.5 px-1 py-0.5">
                                            <BadgeIcon class="w-3 sm:w-5 h-3 sm:h-5 fill-white" />
                                            {#if tournament.badge_url === "none"}
                                                <div class="text-xs sm:text-sm break-words">No Badge</div>
                                            {:else}
                                                <div class="text-xs sm:text-sm break-words">Badge Pending</div>
                                            {/if}
                                        </div>
                                    {/if}
                                </li>
                                <li>
                                    <a href={tournament.forum_post} target="_blank" rel="noopener noreferrer">
                                        <div class="flex items-center gap-1.5 px-1 py-0.5">
                                            <OsuIcon class="w-3 sm:w-5 h-3 sm:h-5 fill-white" />
                                            <div class="text-xs sm:text-sm break-words">Forum Post</div>
                                        </div>
                                    </a>
                                </li>
                                {#if tournament.sheet_link?.length > 0}
                                    <li>
                                        <a href={tournament.sheet_link} target="_blank" rel="noopener noreferrer">
                                            <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                <SpreadsheetIcon class="w-2 sm:w-5 h-2 sm:h-5 fill-white" />
                                                <div class="text-xs sm:text-sm break-all">Spreadsheet</div>
                                            </div>
                                        </a>
                                    </li>
                                {/if}
                            </ul>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
