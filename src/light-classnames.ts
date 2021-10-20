import reduceObjectParam from "./reduceObjectParam";

export type ArgumentType = string | object | null | undefined;
export type TruthyArgumentType = string | object;

const isTruthy = (value: ArgumentType): value is TruthyArgumentType => {
    return !!value;
};

const lightClassNames = (...args: ArgumentType[]): string => {
    const truthyArgs = args.filter(isTruthy);

    return truthyArgs.reduce(
        (previousValue: string[], currentArg: TruthyArgumentType): string[] => {
            if (typeof currentArg === 'string') {
                return previousValue.concat(currentArg);
            }

            return previousValue.concat(reduceObjectParam(currentArg));
        },
        []
    ).join(' ');
};

export default lightClassNames;