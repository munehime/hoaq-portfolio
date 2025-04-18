<script lang="ts">
    import Icon from "@iconify/svelte";
    import triangleFillIcon from "@iconify-icons/mingcute/triangle-fill";
    import userIcon from "@iconify-icons/mdi/user";
    import badgeIcon from "@iconify-icons/simple-line-icons/badge";
    import osuIcon from "@iconify-icons/simple-icons/osu";
    import spreadsheetIcon from "@iconify-icons/mdi/spreadsheet";

    const { tournamentYear } = $props();

    let isOpen = $state(false);

    function handleOnClick(event: MouseEvent) {
        event.preventDefault();
        isOpen = !isOpen;
    }
</script>

<div class="py-4">
    <button class="flex justify-between w-full pb-2 border-b-4 border-b-[#bdc1c6]" type="button"
            onclick={handleOnClick}>
        <div class="flex items-center gap-3 text-left">
            <div class={"flex items-center transition-all duration-200 " + (!isOpen ? "rotate-90" : "rotate-180")}>
                <Icon icon={triangleFillIcon} class="min-w-4 text-base text-white" />
            </div>
            <div class="font-bold text-lg">
                {tournamentYear.year}
            </div>
        </div>
        <div class="ml-3 text-lg text-right">
            <span class="font-bold italic">{tournamentYear.statistics.roles}</span>&#x0020;roles
            in&#x0020;<span class="font-bold italic">{tournamentYear.statistics.tournaments}</span>&#x0020;tournaments
        </div>
    </button>
    <div class={"overflow-hidden transition-all duration-200" + (isOpen ? "" : " hidden")}>
        <ul class="grid grid-cols-1 xl:grid-cols-2 min-[1625px]:grid-cols-3 gap-5 pt-4">
            {#each tournamentYear.tournaments as tournament, index (`${tournamentYear.year}-${index}`)}
                <li>
                    <div
                        class="grid grid-cols-[28px_minmax(0,_1fr)] md:grid-cols-[28px_minmax(0,_1fr)_150px] bg-[#1e1e1e]"
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
                                <div class="block md:hidden mt-1.5 py-1">
                                    <ul class="flex justify-between h-full select-none">
                                        <li>
                                            {#if tournament.badge_url !== "none" && tournament.badge_url !== "pending"}
                                                <a href={tournament.badge_url} target="_blank"
                                                   rel="noopener noreferrer">
                                                    <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                        <Icon icon={badgeIcon} class="text-xl fill-white" />
                                                        <div class="text-xs break-words">Badged</div>
                                                    </div>
                                                </a>
                                            {:else}
                                                <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                    <Icon icon={badgeIcon} class="text-xl sm:text-2xl fill-white" />
                                                    {#if tournament.badge_url === "none"}
                                                        <div class="text-xs break-words">No Badge</div>
                                                    {:else}
                                                        <div class="text-xs break-words">Badge Pending</div>
                                                    {/if}
                                                </div>
                                            {/if}
                                        </li>
                                        <li>
                                            <a href={tournament.forum_post} target="_blank" rel="noopener noreferrer">
                                                <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                    <Icon icon={osuIcon} class="text-xl fill-white" />
                                                    <div class="text-xs break-words">Forum Post</div>
                                                </div>
                                            </a>
                                        </li>
                                        {#if tournament.sheet_link?.length > 0}
                                            <li>
                                                <a href={tournament.sheet_link} target="_blank"
                                                   rel="noopener noreferrer">
                                                    <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                        <Icon icon={spreadsheetIcon}
                                                              class="text-xl fill-white" />
                                                        <div class="text-xs break-all">Spreadsheet</div>
                                                    </div>
                                                </a>
                                            </li>
                                        {/if}
                                    </ul>
                                </div>
                            </div>
                            <div class="flex flex-col pt-1">
                                <div class="flex items-center font-bold text-sm">
                                    <Icon icon={userIcon} class="text-base text-white" />
                                    <span class="ml-0.5">Role(s)</span>
                                </div>
                                <div class="text-[#bdc1c6] text-sm">
                                    {tournament.roles.join(", ")}
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block p-2">
                            <ul class="flex flex-col justify-around h-full select-none">
                                <li>
                                    {#if tournament.badge_url !== "none" && tournament.badge_url !== "pending"}
                                        <a href={tournament.badge_url} target="_blank" rel="noopener noreferrer">
                                            <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                <Icon icon={badgeIcon} class="text-2xl fill-white" />
                                                <div class="text-xs sm:text-sm break-words">Badged</div>
                                            </div>
                                        </a>
                                    {:else}
                                        <div class="flex items-center gap-1.5 px-1 py-0.5">
                                            <Icon icon={badgeIcon} class="text-2xl fill-white" />
                                            {#if tournament.badge_url === "none"}
                                                <div class="text-sm break-words">No Badge</div>
                                            {:else}
                                                <div class="text-sm break-words">Badge Pending</div>
                                            {/if}
                                        </div>
                                    {/if}
                                </li>
                                <li>
                                    <a href={tournament.forum_post} target="_blank" rel="noopener noreferrer">
                                        <div class="flex items-center gap-1.5 px-1 py-0.5">
                                            <Icon icon={osuIcon} class="text-2xl fill-white" />
                                            <div class="text-sm break-words">Forum Post</div>
                                        </div>
                                    </a>
                                </li>
                                {#if tournament.sheet_link?.length > 0}
                                    <li>
                                        <a href={tournament.sheet_link} target="_blank" rel="noopener noreferrer">
                                            <div class="flex items-center gap-1.5 px-1 py-0.5">
                                                <Icon icon={spreadsheetIcon} class="text-2xl fill-white" />
                                                <div class="text-sm break-all">Spreadsheet</div>
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
