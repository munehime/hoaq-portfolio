<script lang="ts">
    const images = [
        {
            url: "/assets/images/common/tournaments/banners/msedge_Io1HSEA7MW.png",
        },
        {
            url: "/assets/images/common/tournaments/banners/msedge_LJwp8PodEI.png",
        },
        {
            url: "/assets/images/common/tournaments/banners/msedge_rDdkA5qvFV.png",
        },
        {
            url: "/assets/images/common/tournaments/banners/msedge_VKBvO2hIDG.png",
        },
        {
            url: "/assets/images/common/tournaments/banners/msedge_YoxqO5QptU.png",
        },
    ];
</script>

<svelte:head>
    <title>commissions | Hoaq</title>
    <meta name="description" content="Hi, I'm Hoaq"/>
</svelte:head>

<main>
    <div class="flex flex-col min-h-screen justify-center items-center px-12 sm:px-24 py-20">
        <div class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 justify-between items-start">
            <div class="flex flex-col gap-4 justify-between items-between lg:items-start">
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">Recent works</div>
                    <div class="px-3 py-1 text-lg text-[#bdc1c6] italic">
                        Click on the image to go to the corresponding sheet
                    </div>
                </div>
                <div class="w-full px-4" />
            </div>
            <div class="mt-3 lg:mt-0 flex flex-col gap-4 justify-between items-start">
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">General info</div>
                    <div class="px-3 py-1 text-lg text-[#bdc1c6]">
                        Calling this commission is a bit of a joke, because none of these are worth being actual
                        commissions. But still, for the sake of legitimacy, just take it as is.
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">What can I do?</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg text-[#bdc1c6]">
                        <div>
                            Mostly minimalist-style main sheets. Keep in mind that if you work with me, expect to see a
                            full package of Hitomi’s backend sheet templates being used. I don’t plan on making my own
                            sheets, since Hitomi v5 is pretty much what I want when those were made.
                        </div>
                        <div>
                            As a bonus, I can even help setting up your server to be more tournament-focus with
                            permissions and per-user verification with osu!.
                        </div>
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">Pricing</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg text-[#bdc1c6]">
                        <div>What pricing? Food? Consumable?</div>
                        <div>
                            Jokes aside, there is <strong>no set price</strong> for my work. You can choose to pay me base
                            of what you think my work is worth.
                        </div>
                        <div>
                            I’m doing all of this because I want to, not because I take this as an actual money-maker.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
