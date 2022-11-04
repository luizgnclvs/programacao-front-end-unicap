const changeFocus = (event) => {
    if (event.key !== "Backspace") {
        if (event.key === "ArrowLeft" && event.target.previousElementSibling) {
            event.target.previousElementSibling.focus();
        } else if (event.key === "ArrowRight" && event.target.nextElementSibling) {
            event.target.nextElementSibling.focus();
        } else {
            if (event.which >= 65 && event.which <= 90) {

                if (event.target.nextElementSibling) {
                    event.target.nextElementSibling.focus();
                }
            }
        }
    }
};

const backspaceFocus = (event) => {
    if (event.key === "Backspace") {
        if (event.target.value === "") {
            if (event.target.previousElementSibling) {
                event.target.previousElementSibling.value = "";
                event.target.previousElementSibling.focus();
            }
        }
    }
};

export const clearInputs = () => {
    let inputs = document.querySelectorAll(".input-letter");

    for (let input of inputs) {
        input.value = "";
    }
};

export const autoFocus = () => {
    let letterInputs = document.querySelectorAll(".input-letter");
    letterInputs[0].focus();
  };

export const InputGrid = ({ letters }) => {
    const style = {
        gridTemplateColumns: "repeat(" + letters.length + ", 1fr)"
    }

    return <div className="input-grid" style={style}>
        {letters.map((letter, index) => (
            <input id={letter} key={index} className="input-letter" maxLength="1" onKeyUp={changeFocus} onKeyDown={backspaceFocus} autoComplete="off"/>
        ))}
    </div>
};