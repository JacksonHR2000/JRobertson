
export const dieVals = ["one", "two", "three", "four", "five", "six"]

export let rollDie = () => {
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1)) + min;

}