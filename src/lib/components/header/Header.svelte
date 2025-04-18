<script lang="ts">
    import Icon from "@iconify/svelte";
    import arrowLeftFill from "@iconify-icons/mingcute/arrow-left-fill";
</script>

<div class="fixed left-0 top-0">
    <div class="flex justify-between items-center px-5 pt-6 pb-4">
        <a href="/" title="Back to Home">
            <div class="px-3 py-2 text-[#bdc1c6] hover:text-white transition-colors duration-200">
                <Icon class="text-3xl" icon={arrowLeftFill}  />
            </div>
        </a>
    </div>
</div>
