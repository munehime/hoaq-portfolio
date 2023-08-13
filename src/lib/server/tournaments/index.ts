import { error } from "@sveltejs/kit";
import { GOOGLE_API_KEY } from "$env/static/private";
import { google } from "googleapis";

const SPREADSHEET_ID = "1oLguj4B8Jo5dluiNd4CrSPKj5Uugo3lgGsuT8cn1ZE0";

interface Tournament {
    year: number;
    name: string;
    acronym: string;
    forum_post: string;
    sheet_link: string;
    badge_url: string;
    roles: Array<string>;
    status: string;
}

function toBoolean(value: string): boolean {
    return value.toLowerCase() === "true";
}

function groupByKey<T>(data: Array<T>, key: keyof T): { [key: string]: Array<T> } {
    return data.reduce((storage, item) => {
        const group = item[key] as string;

        storage[group] = storage[group] || [];
        storage[group].push(item);

        return storage;
    }, {} as { [key: string]: Array<T> });
}

const sheets = google.sheets({
    version: "v4",
    auth: GOOGLE_API_KEY,
});

export const getTournaments = async ({ groupBy }: { groupBy?: string }) => {
    const tournaments: Array<Tournament> = [];

    try {
        const data = (
            await sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: "_data!A5:O",
            })
        ).data.values as Array<Array<string>>;

        for (const line of data) {
            const [
                year,
                name,
                acronym,
                sheet_link,
                forum_post,
                badge_url,
                is_host,
                is_technician,
                is_mappooler,
                is_referee,
                is_streamer,
                is_commentator,
                status,
            ] = line;

            const roles: Array<string> = [];

            if (toBoolean(is_host)) {
                roles.push("Host");
            }

            if (toBoolean(is_technician)) {
                roles.push("Technician");
            }

            if (toBoolean(is_mappooler)) {
                roles.push("Mappooler");
            }

            if (toBoolean(is_referee)) {
                roles.push("Referee");
            }

            if (toBoolean(is_streamer)) {
                roles.push("Streamer");
            }

            if (toBoolean(is_commentator)) {
                roles.push("Commentator");
            }

            const tournament: Tournament = {
                year: Number(year),
                name,
                acronym,
                forum_post,
                sheet_link,
                badge_url,
                roles,
                status,
            };

            tournaments.push(tournament);
        }
    } catch (err) {
        throw error(500, "Error when fetching data");
    }

    if (groupBy === "year") {
        const groupedTournaments = groupByKey(tournaments, "year");
        const tournamentArray = Object.keys(groupedTournaments)
            .map((group) => {
                const tournamentsInYear = groupedTournaments[group];
                const roles = tournamentsInYear.reduce(
                    (accumulator, currentTournament) => accumulator + currentTournament.roles.length,
                    0
                );

                return {
                    year: group,
                    statistics: {
                        roles,
                        tournaments: tournamentsInYear.length,
                    },
                    tournaments: tournamentsInYear,
                };
            })
            .sort((a, b) => Number(b.year) - Number(a.year));

        if (
            tournamentArray.some((tournament) => tournament.year === "2017") &&
            tournamentArray.some((tournament) => tournament.year === "2019")
        ) {
            const sourceTournamentYearIndex = tournamentArray.findIndex((tournament) => tournament.year === "2017");
            const targetTournamentYearIndex = tournamentArray.findIndex((tournament) => tournament.year === "2019");
            const sourceTournamentYear = tournamentArray[sourceTournamentYearIndex];

            tournamentArray[targetTournamentYearIndex].year = "2019 - 2017";
            tournamentArray[targetTournamentYearIndex].statistics.roles += sourceTournamentYear!.statistics.roles;
            tournamentArray[targetTournamentYearIndex].statistics.tournaments +=
                sourceTournamentYear!.statistics.tournaments;
            tournamentArray[targetTournamentYearIndex].tournaments = tournamentArray[
                targetTournamentYearIndex
            ].tournaments.concat(sourceTournamentYear!.tournaments);

            tournamentArray.splice(sourceTournamentYearIndex, 1);
        }

        return { tournaments: tournamentArray };
    }

    return { tournaments };
};
