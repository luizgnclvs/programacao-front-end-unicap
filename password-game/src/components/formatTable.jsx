let regexes = [/[aáàãâ]/i, /[eé]/i, /[ií]/i, /[oóõoô]/i, /[uú]/i, /[cç]/i];

const matchRegex = (char) => {
    let match = null;
    let regex = -1;

    for (let i = 0; i < regexes.length; i++) {
        match = char.match(regexes[i]);

        if (match !== null) {
            regex = i;
            break;
        }
    }

    return {match, regex};
};

export const formatTable = () => {
    let rows = document.querySelectorAll(".row");
    let inputs = document.querySelectorAll(".guess");

    for (let row of rows) {
        let cellElements = row.children;

        let cells = [];
        let letters = [];

        for (let i = 0; i < cellElements.length; i++) {
            cells.push({cell: cellElements[i], value: cellElements[i].innerHTML, position: i});
            letters.push({value: inputs[i].id, matched: false,  position: i});
        }

        for (let letter of letters) {
            let cell = cells.find(object => object.position === letter.position);

            let letterMatch = matchRegex(letter.value);
            let cellMatch = matchRegex(cell.value);

            if (letterMatch.regex === cellMatch.regex) {
                if (letterMatch.match && cellMatch.match) {
                    cell.cell.classList.add("bull");
                    letter.matched = true;
                } else {
                    if (letter.value === cell.value) {
                        cell.cell.classList.add("bull");
                        letter.matched = true;
                    }
                }
            }
        }

        for (let cell of cells) {
            let cellMatch = matchRegex(cell.value);

            for (let letter of letters) {
                if (!letter.matched) {
                    let letterMatch = matchRegex(letter.value);

                    if (letterMatch.regex === cellMatch.regex) {
                        if (letterMatch.match && cellMatch.match) {
                            cell.cell.classList.add("cow");
                            letter.matched = true;
                            break;
                        } else {
                            if (letter.value === cell.value) {
                                cell.cell.classList.add("cow");
                                letter.matched = true;
                                break;
                            } else {
                                continue;
                            }
                        }
                    } else {
                        continue;
                    }
                }
            }
        }
    }
};