import useCounter from '../hooks/countHook';

function UseCount () {
    const {count, increment} = useCounter(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>증가</button>
        </div>
    )
}