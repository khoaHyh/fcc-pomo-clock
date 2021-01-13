import Manipulate from './Manipulate';

// Creates each timer-length handler and passes the necessary props
const ManList = (
    { 
        manipulateTime,
        breakTime,
        sessionTime,
        handleDecrement,
        handleIncrement
    }) => {

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
                    breakTime={breakTime}
                    sessionTime={sessionTime}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                />
            );
        })
    );
}

export default ManList