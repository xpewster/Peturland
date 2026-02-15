export const getYearString = (answerIndexToYears: (number[] | null)[], index: number): string => {
    if (answerIndexToYears?.[index] === null) {
        return "";
    } else if (answerIndexToYears?.[index]![0] === null && answerIndexToYears[index]![1] !== null) {
        return `(-${answerIndexToYears?.[index]![1]})`;
    } else if (answerIndexToYears?.[index]![1] === null) {
        return `(${answerIndexToYears[index]![0]}-)`;
    }
    return `(${answerIndexToYears?.[index]![0]}-${answerIndexToYears?.[index]![1]})`;
};
