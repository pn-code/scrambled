import generateRandomNumber from "./generateRandomNumber";

export default function randomizeList (list) {
    const copy = list;
    const result = [];

    while (copy.length) {
        const max = copy.length - result.length;
        const randomIndex = generateRandomNumber(max);

        const splicedItem = copy.splice(randomIndex, 1)[0];
        result.push(splicedItem);
    }

    return result;
}