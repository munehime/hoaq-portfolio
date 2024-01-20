import { getTournaments } from "$lib/server/tournaments";

export async function load() {
    const tournaments = await getTournaments({ groupBy: "year" })

    return tournaments;
}

export const prerender = false;

export const csr = true;
