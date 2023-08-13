<script lang="ts">
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="fixed left-0 top-0">
    <div class="flex justify-between items-center px-5 pt-6 pb-4">
        <a href="/" title="Back to Home">
            <div class="px-3 py-2 text-[#bdc1c6] hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faArrowLeft} class="text-2xl" />
            </div>
        </a>
    </div>
</div>
