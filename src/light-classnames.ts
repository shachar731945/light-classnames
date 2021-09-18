import reduceObjectParam from "./reduceObjectParam";
import { argumentType } from "./types";

const lightClassNames = (...args: argumentType[]): string => {
    return args.reduce(
        (previousValue: string[], currentArg: argumentType): string[] => {
            if (typeof currentArg === 'string') {
                return previousValue.concat(currentArg);
            }

            if (Array.isArray(currentArg)) {
                return previousValue.concat(lightClassNames(...currentArg))
            }
            
            return previousValue.concat(reduceObjectParam(currentArg));
        }
        , []
    ).join(' ');
};

export default lightClassNames;