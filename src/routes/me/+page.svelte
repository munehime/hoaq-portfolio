<script lang="ts">
    import Icon, { type IconifyIcon } from "@iconify/svelte";
    import osuIcon from "@iconify-icons/simple-icons/osu";
    import twitterIcon from "@iconify-icons/mdi/twitter";
    import facebookIcon from "@iconify-icons/mdi/facebook";
    import twitchIcon from "@iconify-icons/mdi/twitch";
    import discordIcon from "@iconify-icons/ic/baseline-discord";

    const socialLinks: Array<{
        title: string;
        url: string;
        icon: IconifyIcon;
    }> = [
        {
            title: "osu!",
            url: "https://osu.ppy.sh/users/7696512",
            icon: osuIcon
        },
        {
            title: "Twitter",
            url: "https://twitter.com/itsmehoaq",
            icon: twitterIcon
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/itsmehoaq",
            icon: facebookIcon
        },
        {
            title: "Twitch",
            url: "https://www.twitch.tv/itsmehoaq",
            icon: twitchIcon
        },
        {
            title: "Discord",
            url: "https://discord.com/users/154605183714852864",
            icon: discordIcon
        }
    ];
</script>

<svelte:head>
    <title>me | Hoaq</title>
    <meta name="description" content="Hi, I'm Hoaq" />
    <meta property="og:title" content="me | Hoaq" />
    <meta property="og:url" content="https://hoaq.id.vn/me" />
    <meta property="og:description" content="Hi, I'm Hoaq" />
    <meta property="twitter:title" content="me | Hoaq" />
    <meta property="twitter:description" content="Hi, I'm Hoaq" />
</svelte:head>

<main class="flex-1">
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
                    <div class="text-xl text-center font-mono">
                        25, he-him, vi/en
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
                                            class="flex items-center"
                                        >
                                            <Icon icon={link.icon} class="text-2xl" />
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
                    <div class="px-3 py-1 text-lg">
                        Again, I’m Hoaq. I have been in the community since 2015 and started staffing around 2017 -
                        2018. Ever since, I’ve been contributed to over 100 tournaments of various scale - from small
                        country-locked tournament to well-known international tournaments.
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">osu! tournaments experience</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg">
                        <div>
                            A jack-of-all-trade type of staff. You can find me in pretty much every staff role of a
                            tournament, with the exclusion of designing. I was mainly a referee from 2018 to 2020 and
                            slowly trainsitioned to Streamer role when I finally got a decent PC. Lately, you might know me as one of the organizers for <b>Resurrection Cup</b> and <b>Aim Cup</b>.
                        </div>
                        <div>
                            Since 2021, I’ve been experimenting with making spreadsheets for tournaments. Unlike other sheeters, you can find me designing some of the more sensible spreadsheets - minimal and informative.
                        </div>
                        <div>
                            Other than staffing for international tournaments, you might also know me as the host of <b>Vietnam osu! Championship</b>, under the provision of <a class="italic">Vietnam Community League</a> (it's like <a class="italic">Corsace</a>, but for focused on the Vietnamese player-base).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
