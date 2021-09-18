import arraysReduce from "./arraysReduce";
import { arraysArgumentType } from "./types";

const arraysClassNames = (...args: arraysArgumentType[]): string => {
    return args.reduce(
        (previousValue: string[], currentArg: arraysArgumentType): string[] => {
            if (typeof currentArg === 'string') {
                return previousValue.concat(currentArg);
            }
            
            if (currentArg[1]) {
                return previousValue.concat(currentArg[0])    
            }

            return previousValue;
        }
        , []
    ).join(' ');
};

export default arraysClassNames;