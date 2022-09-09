const getMatches = (str, regex) => {
    let match = str.match(regex);
    return match === null ? 0 : match.length;
};

export const RegexCounter = ({ title, text, regex }) => (
    <h3>
        {title}: {getMatches(text, regex)}
    </h3>
);