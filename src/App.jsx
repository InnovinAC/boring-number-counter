import { useReducer, useEffect} from 'react'
import './App.css'
import './assets/style.css'

const oldCount = localStorage.getItem('count')
const initialCount = oldCount || {count: 0}

const reducer = (state, action) => {
    let returnValue;
    action.type === 'INCREASE' && (returnValue = {count: state.count++})
    action.type === 'DECREASE' && (returnValue = {count: state.count--})
    action.type === 'RESET' && (returnValue = {count: 0})
    return returnValue || {count: 0}
}

function App() {
    const [counterState, dispatchCounter] = useReducer(reducer, initialCount);
    const increase = () => {
        dispatchCounter({type: 'INCREASE'})
    }
    const decrease = () => {
        dispatchCounter({type: 'DECREASE'})
    }
    const reset = () => {
        console.log('heyy')
        dispatchCounter({type: 'RESET'})
    }

    useEffect(() => {
        counterState === 1 && (console.log('hmm'));

    }, [counterState])
console.log(counterState.count);
    return (
        <>

            <h1>Boring Counter </h1>
            <small>Nothing fancy, really!</small>
            <div className="card">
                <button onClick={decrease}>
                    decrease :(
                </button>
                <button>
                    count is {counterState.count}
                </button>
                <button onClick={increase}>
                    increase :)
                </button>


            </div>
            <button onClick={reset} >
                Reset
            </button>
            <p>
                Innovin...
            </p>
        </>
    )
}

export default App
