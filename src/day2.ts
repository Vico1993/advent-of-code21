import { readInput } from "./tools";

const data = readInput("./input/day2.txt");

enum Action {
    forward = "forward",
    down = "down",
    up = "up",
}

const level1 = (): number => {
    const position = {
        horizontal: 0,
        depth: 0,
    };

    for (const val of data) {
        const split = val.split(" ");

        switch (split[0]) {
            case Action.forward:
                position.horizontal += Number(split[1]);
                break;
            case Action.down:
                position.depth += Number(split[1]);
                break;
            case Action.up:
                position.depth -= Number(split[1]);
                break;
        }
    }

    return position.horizontal * position.depth;
};

const level2 = (): number => {
    const position = {
        horizontal: 0,
        depth: 0,
        aim: 0,
    };

    for (const val of data) {
        const split = val.split(" ");

        switch (split[0]) {
            case Action.forward:
                position.horizontal += Number(split[1]);
                position.depth += position.aim * Number(split[1]);
                break;
            case Action.down:
                position.aim += Number(split[1]);
                break;
            case Action.up:
                position.aim -= Number(split[1]);
                break;
        }
    }

    return position.horizontal * position.depth;
};

console.log("Result level1: ", level1());
console.log("Result level2: ", level2());
