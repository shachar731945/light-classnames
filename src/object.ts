import arraysReduce from "./arraysReduce";
import { objectArgumentType } from "./types";

const objectClassNames = (...args: objectArgumentType[]): string => {
    return args.reduce(
        (previousValue: string[], currentArg: objectArgumentType): string[] => {
            if (typeof currentArg === 'string') {
                return previousValue.concat(currentArg);
            }
            
            return previousValue.concat(arraysReduce(Object.entries(currentArg)));
        }
        , []
    ).join(' ');
};

export default objectClassNames;