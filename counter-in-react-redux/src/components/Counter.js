import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:''})
  };
  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Reset</button>
    </main>
  );
};

export default Counter;
