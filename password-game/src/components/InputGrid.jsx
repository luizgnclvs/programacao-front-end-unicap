const changeFocus = (event) => {
    if (event.keyCode === 8 && event.target.previousElementSibling) {
        event.target.previousElementSibling.value = "";
        event.target.previousElementSibling.focus();
    } else {
        if (event.keyCode != 8 && event.target.nextElementSibling) {
            event.target.nextElementSibling.focus();
        }
    }
};

export const autoFocus = () => {
    let letterInputs = document.querySelectorAll(".guess");
    letterInputs[0].focus();
  };

export const InputGrid = ({ letters }) => {
    const style = {
        gridTemplateColumns: "repeat(" + letters.length + ", 1fr)"
    }

    return <div className="grid" style={style}>
        {letters.map((letter, index) => (
            <input id={letter} key={index} className="guess" maxLength="1" onKeyUp={changeFocus} autoComplete="off"/>
        ))}
    </div>
};