import { json } from "@sveltejs/kit";
import { getTournaments } from "$lib/server/tournaments";
import type { RequestEvent, RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
    const data = await getTournaments({ groupBy: "year" });

    return json(data);
};
