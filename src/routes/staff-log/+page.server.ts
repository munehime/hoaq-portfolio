import { error } from "@sveltejs/kit";

export async function load({ url }: { url: any }) {
    const response = await fetch(url.origin + "/api/tournaments" + "?group_by=year");
    const tournaments = await response.json();

    if (tournaments) {
        return tournaments;
    }

    throw error(404, "Not found");
}

export const prerender = "auto";
