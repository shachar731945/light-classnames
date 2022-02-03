export type TruthyArgumentType = string | object | number;
export type ArgumentType = TruthyArgumentType | null | undefined;

const lightClassNames = (...args: ArgumentType[]): string => {
    let finalString = '', i = 0, l = args.length;

    while (i < l) {
        const arg = args[i];
        if (arg) {
            if (typeof arg === 'object') {
                for (const key in arg) {
                    if (arg[key as keyof object]) {
                        finalString += ' ' + key;
                    }
                }
            } else {
                finalString += ' ' + arg;
            }
        }
        i++;
    }

    return finalString.substring(1);
};

export default lightClassNames;