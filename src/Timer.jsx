import { React } from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({expiryTimestamp}) => {
    const {seconds, minutes} = useTimer({expiryTimestamp})
    return ( 
        <p> {minutes}:{(seconds >= 10) ? seconds : "0" + seconds}</p>
    );
}
 
export default Timer;
