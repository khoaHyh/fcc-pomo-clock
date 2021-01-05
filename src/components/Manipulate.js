import styled from 'styled-components';

const ManipulateTime = styled.div`
    margin: 0.75rem;
    border: solid 1px blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Manipulate = ({ label, decrement, length, increment, text }) => {
    
    return (
        <ManipulateTime className="manipulate-time">
            <div id={label}>{text}</div>
            <button id={decrement}>-</button>
            <div id={length}>placeholder</div>
            <button id={increment}>+</button>
        </ManipulateTime>
    );
}

export default Manipulate;