import Manipulate from './Manipulate';

const ManList = ({ manipulateTime, handleTime }) => {

    return (
        manipulateTime.map((e, i) => {
            return (
                <Manipulate 
                    key={i}
                    label={manipulateTime[i].label}
                    decrement={manipulateTime[i].decrement}
                    length={manipulateTime[i].length}
                    increment={manipulateTime[i].increment}
                    text={manipulateTime[i].text}
                    updateDisplay={handleTime}
                />
            );
        })
    );
}

export default ManList