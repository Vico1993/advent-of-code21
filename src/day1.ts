import { readInput } from "./tools";

const data = readInput("./input/day1.text");

/**
 * Level 1 of day1
 *
 * @returns {number}
 */
const level1 = (input: string[]): number => {
    let res = 0;

    for (let i = 0; i < input.length + 1; i++) {
        if (input[i - 1] && Number(input[i]) > Number(input[i - 1])) {
            res += 1;
        }
    }

    return res;
};

/**
 * Level 2 of day1
 *
 * @returns {number}
 */
const level2 = (): number => {
    const inputs = [];

    for (let i = 0; i < data.length + 1; i++) {
        if (data[i + 2]) {
            inputs.push(
                Number(data[i]) + Number(data[i + 1]) + Number(data[i + 2])
            );
        }
    }

    return level1(inputs);
};

console.log("Result level1: ", level1(data));
console.log("Result level2: ", level2());
