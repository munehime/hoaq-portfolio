<script lang="ts">
    import TournamentYear from "$lib/components/staff-log/TournamentYear.svelte";

    export let tournamentYears;
</script>

<ul class="transition-all duration-300">
    {#each tournamentYears as tournamentYear}
        <TournamentYear tournamentYear={tournamentYear} />
    {/each}
</ul>
