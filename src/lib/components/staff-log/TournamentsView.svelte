<script lang="ts">
    import TournamentYear from "$lib/components/staff-log/TournamentYear.svelte";

    const { tournamentYears } = $props();
</script>

<ul class="transition-all duration-300">
    {#each tournamentYears as tournamentYear (tournamentYear.year)}
        <TournamentYear {tournamentYear} />
    {/each}
</ul>
