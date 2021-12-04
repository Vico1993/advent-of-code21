import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * Return data from input
 *
 * @param {string} path
 * @returns {string}
 */
export const readInput = (path: string): string[] => {
    return readFileSync(resolve(path), {
        encoding: "utf8",
        flag: "r",
    })
        .toString()
        .split("\n");
};
