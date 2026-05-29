import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart{
    productName:string;
    quantity:number;
}

const itemsInCart:ItemInCart[] = [
    { productName: "Nintendo switch 2", quantity: 10 },
    { productName: "PlayStation 5", quantity: 5 },
    { productName: "Xbox Series X", quantity: 3 },
    { productName: "PC Gaming", quantity: 2 }
]



export function FirstStepsApp() {
 return (
    <>
        <h1>Shopping cart</h1>

        {itemsInCart.map((item)=>(
            <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
        ))}
        {/* <ItemCounter name="Nintendo switch 2" quantity={10} />
        <ItemCounter name="PlayStation 5" quantity={5} />
        <ItemCounter name="Xbox Series X" quantity={3} />
        <ItemCounter name="PC Gaming" quantity={2} /> */}
    </>
 )    
}