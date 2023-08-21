import { error } from "@sveltejs/kit";

export async function load({ fetch }: { fetch: any }) {
    const response = await fetch("/api/tournaments" + "?group_by=year");
    const tournaments = await response.json();

    if (tournaments) {
        return tournaments;
    }

    throw error(404, "Not found");
}

export const prerender = true;
