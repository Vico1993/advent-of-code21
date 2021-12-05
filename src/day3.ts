import { readInput } from "./tools";

const data = readInput("./input/day3.txt");

// expect: 3549854
const level1 = (): number => {
    const popular: number[] = Array(12).fill(0);
    const nbLine = data.length;

    for (const numberInBit of data) {
        numberInBit.split("").forEach((bit: string, i: number) => {
            if (Number(bit)) {
                popular[i] += 1;
            }
        });
    }

    let gamma = [];
    let epsilon = [];
    for (const popularBit of popular) {
        if (popularBit > nbLine / 2) {
            gamma.push("1");
            epsilon.push("0");
        } else {
            gamma.push("0");
            epsilon.push("1");
        }
    }

    return parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
};

console.log("Result level1: ", level1());
// console.log("Result level2: ", level2());
