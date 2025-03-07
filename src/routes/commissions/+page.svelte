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
    <meta name="description" content="Hi, I'm Hoaq" />
    <meta property="og:title" content="commissions | Hoaq" />
    <meta property="og:url" content="https://hoaq.id.vn/commissions" />
    <meta property="og:description" content="Hi, I'm Hoaq" />
    <meta property="twitter:title" content="commissions | Hoaq" />
    <meta property="twitter:description" content="Hi, I'm Hoaq" />
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
                    <div class="px-3 py-1 text-4xl font-bold text-white">Pricing</div>
                    <div class="px-3 py-1 text-lg text-[#bdc1c6]">
                        <ul>
                            <li><strong>Main sheet only:</strong> $3</li>
                            <li><strong>Full package:</strong> <a class="italic">starting from</a> $10</li>
                            <li><strong>Personal sheet (staff / player history):</strong> <a class="italic">starting from</a> $15</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">What's included?</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg text-[#bdc1c6]">
                        <div>
                            <ul>
                                <li><strong>Full package:</strong>
                                <ul>
                                    <li>Main sheet: Cover, Registration, Mappool, Qualifiers schedule & result, Bracket Schedule</li>
                                    <li>Backend: Registration forms (player & staff), Management, Mappooling, Referee, weekly statistics</li>
                                </ul>
                                <li><strong>Personal sheet:</strong> Staffing <strong>OR</strong> playing history & accompanying input sheet.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">Extra</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg text-[#bdc1c6]">
                        <div class="px-3 py-1 text-lg text-[#bdc1c6] italic">warning: below are all DLCs, to be added to the package choice above</div>
                        <div>
                            <ul>
                                <li><strong>Uncommon tournament format</strong> (Swiss / Round Robin / Single Elimination / ...): $5</li>
                                <li><strong>Uncommon mappool format:</strong> $5</li>
                                <li><strong>Other tournament gimmicks:</strong> DM for details</li>
                                <li><strong>Staff listing on main sheet:</strong> $5</li>
                                <li><strong>Full history sheet</strong> (both staff and player history): $10</li>
                                <li><strong>Rush fee / Urgent request:</strong> $15</li>
                                <li><strong>Major changes after finishing:</strong> $10</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="px-3 py-1 text-4xl font-bold text-white">Terms of Service</div>
                    <div class="px-3 py-1 flex flex-col gap-4 text-lg text-[#bdc1c6]">
                        <div>
                            <ul>
                                <li>I reserve the right to deny any requests.</li>
                                <li>All requests must be made at minimum 2 weeks in advanced.</li>
                                <li>Tournament GFX must be done at minimum 7 days prior to forum post release date.</li>
                                <ul><li>If GFX are done 7 days prior, sheet pricing are also subjected to the <strong>rush fee.</strong></li></ul>
                                <li>Final pricing might change even after confirmation, depends on the complexity of your request.</li>
                                <li>No deposit azre required, but full payment must be made once the first draft is agreed upon by both parties.</li>
                                <li>Major changes to sheet design after finishing the final draft are subjected to extra fee mentioned above.</li>
                                <li>All payments must be made via PayPal and are <strong>NON-REFUNDABLE.</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
