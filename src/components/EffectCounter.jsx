import { useState, useEffect } from 'react';

function EffectCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effect ran! Count is:', count);
    });

    useEffect(() => {
        console.log('Component mounted!');
    }, []);

    useEffect(() => {
        console.log('Count changed to:', count);
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Tick');
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('Cleaned up!');
        };
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default EffectCounter;