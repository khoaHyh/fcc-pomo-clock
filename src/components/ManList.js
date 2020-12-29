import Manipulate from './Manipulate';

const ManList = ({ manipulateTime }) => {

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
                />
            );
        })
    );
}

export default ManList