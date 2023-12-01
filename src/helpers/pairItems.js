export default function pairItems(list) {
    const copy = list;
    const result = [];

    while (copy.length) {
        const splicedPair = copy.splice(0, 2);
        result.push(splicedPair);
    }

    return result;
}