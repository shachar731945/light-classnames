import arraysReduce from "./arraysReduce";
import { argumentType } from "./types";

const lightClassNames = (...args: argumentType[]): string => {
    return args.reduce(
        (previousValue: string[], currentArg: argumentType): string[] => {
            if (typeof currentArg === 'string') {
                return previousValue.concat(currentArg);
            }

            if (currentArg instanceof Array) {
                if (currentArg[1]) {
                    return previousValue.concat(currentArg[0]);
                }

                return previousValue;
            }
            
            return previousValue.concat(arraysReduce(Object.entries(currentArg)));
        }
        , []
    ).join(' ');
};

export default lightClassNames;