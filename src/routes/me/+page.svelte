<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faTwitter, faFacebook, faTwitch, faDiscord } from "@fortawesome/free-brands-svg-icons";
    import OsuIcon from "$lib/components/icons/OsuIcon.svelte";
    import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

    const socialLinks: Array<{
        title: string;
        url: string;
        icon?: IconDefinition;
    }> = [
        { title: "osu!", url: "https://osu.ppy.sh/users/7696512" },
        {
            title: "Twitter",
            url: "https://twitter.com/itsmehoaq",
            icon: faTwitter,
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/itsmehoaq",
            icon: faFacebook,
        },
        {
            title: "Twitch",
            url: "https://www.twitch.tv/itsmehoaq",
            icon: faTwitch,
        },
        {
            title: "Discord",
            url: "https://discord.com/users/154605183714852864",
            icon: faDiscord,
        },
    ];
</script>

<svelte:head>
    <title>me | Hoaq</title>
    <meta name="description" content="Hi, I'm Hoaq"/>
</svelte:head>

<main>
    <div class="flex flex-col min-h-screen justify-center items-center px-12 sm:px-24 py-20">
        <div class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 justify-between items-start">
            <div class="h-full flex flex-col justify-center items-center lg:items-start">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <div class="select-none">
                        <div class="relative">
                            <img
                                src="/assets/images/common/logos/hoaq_mogu.png"
                                alt="Narukami Logo"
                                width="444"
                                height="135"
                                class="relative object-contain"
                            />
                        </div>
                    </div>
                    <div class="text-[#bdc1c6] text-xl text-center font-fira-mono">
                        NM1 enjoyer / avid tournament staff
                    </div>
                    <div class="">
                        <ul class="flex gap-7 justify-center items-center w-full">
                            {#each socialLinks as link (link.title)}
                                <li>
                                    <div>
                                        <a
                                            href={link.url}
                                            title={link.title}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="flex items-center text-[#bdc1c6]"
                                        >
                                            {#if link.icon}
                                                <FontAwesomeIcon icon={link.icon} class="text-xl" />
                                            {:else if link.title === "osu!"}
                                                <OsuIcon class="w-5 h-5 fill-[#bdc1c6]" />
                                            {/if}
                                        </a>
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-3 lg:mt-0 flex flex-col gap-4 justify-between items-start">
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">Who am I?</div>
                    <div class="px-3 py-1 text-lg text-[#bdc1c6]">
                        Again, I’m Hoaq. I have been in the community since 2015 and started staffing around 2017 -
                        2018. Ever since, I’ve been contributed to over 100 tournaments of various scale - from small
                        country-locked tournament to well-known international tournaments.
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">osu! tournaments experience</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg text-[#bdc1c6]">
                        <div>
                            A jack-of-all-trade type of staff. You can find me in pretty much every staff role of a
                            tournament, with the exclusion of designing. I was mainly a referee from 2018 to 2020 and
                            slowly trainsitioned to my current favourite role - Streamer (sometimes Commentator). My
                            standout contribution to this role can be seen in <i>3 Digits World Cup</i>,
                            <i>Charlie’s Perfect Math Class</i>,
                            <i>The Perennial</i>,
                            <i>Australia & New Zealand Tournament</i> and many more.
                        </div>
                        <div>
                            Since 2021, I’ve been experimenting with making spreadsheets for tournaments. Though I might
                            not be as good as other well-known sheeters, I’m still confident in my sheeting style -
                            minimal but informative.
                        </div>
                        <div>
                            Other than staffing for international tournaments, you can also find me hosting most of
                            Vietnam’s mainstream tournaments like <i>Vietnam osu! Championship</i>
                            or
                            <i>osu! No Name Tournament</i>, under the provision of Vietnam Community League (think of it
                            as
                            <i>Corsace</i>, but for the Vietnamese community only).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
