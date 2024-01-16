import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className={classes.big}>
            <button onClick={increment}>increment</button>
            <div className="big">
                {count}
            </div>
        </div>
    );
};

export default Counter;
