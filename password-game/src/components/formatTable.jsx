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

        console.log(cells)
        console.log(letters)

        for (let cell of cells) {
            console.log(cell)
            let cellMatch = matchRegex(cell.value);
            console.log(cellMatch)
            
            for (let letter of letters) {
                console.log(letter)
                console.log(letter.matched)
                if (!letter.matched) {
                    let letterMatch = matchRegex(letter.value);
                    console.log(letterMatch)
                    console.log(letterMatch.regex === cellMatch.regex)
                    if (letterMatch.regex === cellMatch.regex) {
                        console.log(letterMatch.match)
                        console.log(cellMatch.match)
                        if (letterMatch.match && cellMatch.match) {
                            console.log(letter.position)
                            console.log(cell.position)
                            console.log(letter.position === cell.position)
                            if (letter.position === cell.position) {
                                cell.cell.classList.add("bull");
                            } else {
                                cell.cell.classList.add("cow");
                            }

                            letter.matched = true;
                            break;
                        } else {
                            console.log(letter.value === cell.value)
                            if (letter.value === cell.value) {
                                console.log(letter.position === cell.position)
                                if (letter.position === cell.position) {
                                    cell.cell.classList.add("bull");
                                } else {
                                    cell.cell.classList.add("cow");
                                }

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
            console.log(letters)
        }
        console.log(cells)
    }
};