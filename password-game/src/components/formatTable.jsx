export const formatTable = () => {
    let rows = document.querySelectorAll(".row");
    let inputs = document.querySelectorAll(".guess");

    for (let row of rows) {
        let cellElements = row.children;
        let cells = [];
        let letters = [];

        for (let i = 0; i < cellElements.length; i++) {
            cells.push({cell: cellElements[i], value: cellElements[i].innerHTML});
            letters.push({value: inputs[i].id, matched: false});
        }

        for (let i = 0; i < cells.length; i++) {
            if (cells[i].value === letters[i].value) {
                letters[i].matched = true;
                cells[i].cell.classList.add("bull");
            }
        }

        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < letters.length; j++) {
                console.log(`${letters[j].value}: ${letters[j].matched}`);
                if (letters[j].matched) {
                    continue;
                } else {
                    if (cells[i].value === letters[j].value) {
                        letters[j].matched = true;
                        cells[i].cell.classList.add("cow");
                    }
                }
            }
        }
    }
};