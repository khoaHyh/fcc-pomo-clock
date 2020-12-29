const Manipulate = ({ label, decrement, length, increment, text }) => {
    
    return (
        <div className="manipulate-time">
            <div id={label}>{text}</div>
            <button id={decrement}>-</button>
            <div id={length}></div>
            <button id={increment}>+</button>
        </div>
    );
}

export default Manipulate;