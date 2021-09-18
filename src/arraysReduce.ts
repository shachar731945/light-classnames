import { arrayArgument } from "./types";

const arraysReduce = (arrays: arrayArgument[]): string => {
    return arrays.reduce((previousValue: string[], currentEntry: arrayArgument): string[] => {
        if (currentEntry[1]) {
            return previousValue.concat(currentEntry[0]);
        }

        return previousValue;
    }, []).join(' ')
};

export default arraysReduce;