import { useEffect, useState } from "react";

// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface Props {
  name:string;
  quantity?:number;
}

export const ItemCounter = ({name, quantity = 1}:Props) => {

  const [itemQuantity, setItemQuantity] = useState(quantity || 0);

  // useEffect(() => {
  //   if (quantity) {
  //     setItemQuantity(quantity);
  //   }
  // }, [quantity]);
  
  const handleClick = ():void => {
    console.log(`Click ${name}`)
  }

  const handleAdd = ():void =>{
      setItemQuantity(itemQuantity + 1);
  }

  const handleSubstract = ():void =>{
    if (itemQuantity === 1) return;
    setItemQuantity(itemQuantity - 1);
  }

  return (
    <section className={styles['item-row']}
    //  style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: 10,
    //     marginTop:10
    // }}
    >
        <span 
        style={{color: itemQuantity > 1 ? 'green' : 'red'}}
        className={styles['item-text']}
        >{name}</span>
        <button
        onClick={ handleAdd }
        >+1</button>
        <span>{itemQuantity}</span>
        <button onClick={ handleSubstract }>-1</button>
    </section>
  )
}
