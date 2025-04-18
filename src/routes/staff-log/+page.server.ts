import { getTournaments } from "$lib/server/sheets";

export async function load() {
    return await getTournaments({ groupBy: "year" });
}
