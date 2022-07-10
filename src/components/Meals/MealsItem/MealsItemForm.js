import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealsItemForm.module.css';

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

// const MealsItemForm = (props) => {
//   const [amountIsValid, setAmountIsValid] = useState(true);
//   const amountInputRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredAmount = amountInputRef.current.value;
//     const enteredAmountNumber = +enteredAmount;

//     //ini valiasi jika enteredAmount sama dengan kosong atau, enteredNumber kurang dari 1 atau lebih dari 5

//     if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
//       setAmountIsValid(false);
//       return; // menghentikan eksekusi
//     }
//     props.onAdddtoCart(enteredAmountNumber);
//   };

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <Input
//         ref={amountInputRef}
//         label="Amount"
//         input={{
//           id: 'amount_' + props.id,
//           type: 'number',
//           min: '1',
//           max: '5',
//           step: '1',
//           defaultValue: '1',
//         }}
//       />
//       <button>+ Add</button>
//       {!amountIsValid && <p>Please enter valid amount (1-5)</p>}
//     </form>
//   );
// };
export default MealsItemForm;
