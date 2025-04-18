<script lang="ts">
    const links: Array<{ title: string; path: string }> = [
        { title: "me!", path: "/me" },
        { title: "commissions", path: "/commissions" },
        { title: "staff log", path: "/staff-log" }
    ];
</script>

<svelte:head>
    <title>Hoaq</title>
    <meta name="description" content="Hi, I'm Hoaq" />
    <meta property="og:title" content="Hoaq" />
    <meta property="og:url" content="https://hoaq.id.vn" />
    <meta property="og:description" content="Hi, I'm Hoaq" />
    <meta property="twitter:title" content="Hoaq" />
    <meta property="twitter:description" content="Hi, I'm Hoaq" />
</svelte:head>

<main class="flex-1">
    <div class="flex flex-col min-h-screen justify-center items-center px-12 sm:px-24 py-20">
        <div class="w-full max-w-5xl flex flex-col gap-7 justify-center items-center">
            <div class="flex flex-col gap-4 justify-center items-center">
                <div class="select-none">
                    <div class="relative animate-wiggle-slow">
                        <img
                            src="/assets/images/common/logos/hoaq_mogu.png"
                            alt="Hoaq Logo"
                            width="444"
                            height="135"
                            class="relative object-contain"
                        />
                    </div>
                </div>
                <div class="text-2xl">
                    Hi, I&apos;m&#x0020;
                    <span class="text-hoaq font-bold">Hoaq</span>
                </div>
            </div>
            <div>
                <nav class="text-2xl">
                    <ul class="flex flex-col md:flex-row justify-center items-center gap-6 font-mono">
                        {#each links as link (link.path)}
                            <li>
                                <div class="transition duration-300 hover:text-white">
                                    <a href={link.path}>
                                        {link.title}
                                    </a>
                                </div>
                            </li>
                            <li>
                                <hr
                                    class="w-12 md:w-0 h-0 md:h-6 border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-[#bdc1c6]"
                                />
                            </li>
                        {/each}
                        <li>
                            <div class="transition duration-300 hover:text-white">
                                <a href="https://ko-fi.com/itsmehoaq" target="_blank" rel="noopener noreferrer">
                                    ko-fi
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</main>
