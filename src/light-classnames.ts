import reduceObjectParam from "./reduceObjectParam";

export type TruthyArgumentType = string | object | number;
export type ArgumentType = TruthyArgumentType | null | undefined;

type valueType = (string | number);

const isTruthy = (value: ArgumentType): value is TruthyArgumentType => {
    return !!value;
};

const lightClassNames = (...args: ArgumentType[]): string => {
    const truthyArgs = args.filter(isTruthy);

    return truthyArgs.reduce(
        (previousValue: valueType[], currentArg: TruthyArgumentType): valueType[] => {
            if (typeof currentArg === 'string' || typeof currentArg === 'number') {
                return previousValue.concat(currentArg);
            }

            return previousValue.concat(reduceObjectParam(currentArg));
        },
        [] as valueType[]
    ).join(' ');
};

export default lightClassNames;