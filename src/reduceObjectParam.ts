const reduceObjectArg = (object: object): string[] => {
    return Object.getOwnPropertyNames(object).reduce(
        (currentArray: string[], currentKey: string): string[] => {
            if (object[ currentKey as keyof object ]) {
                return currentArray.concat(currentKey);
            }

            return currentArray;
        },
        []
    );
};

export default reduceObjectArg;