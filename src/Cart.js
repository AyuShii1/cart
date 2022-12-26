import React from 'react'
import CartItem from './CartItem';
const Cart=(props)=>{

    // constructor(){
    //     super();
    //     this.state={
    //        products:[
    //            {
    //             price:99,
    //             title:'Watch',
    //             qty:1,
    //             img:'',
    //             id:1
    //            },
    //            {
    //             price:999,
    //             title:'Phone',
    //             qty:10,
    //             img:'',
    //             id:2
    //            },
    //            {
    //             price:999,
    //             title:'Laptop',
    //             qty:4,
    //             img:'',
    //             id:3
    //            }
    //        ]
    //     }
    
    // }

    // handleIncreaseQuantity=(product)=>{
    //     console.log('Heyy please inc the qty of ', product);
    //     const {products}=this.state;
    //     const index=products.indexOf(product);

    //     products[index].qty+=1;

    //     this.setState({
    //         products:products
    //     })
    // }

    // handleDecreaseQuantity=(product)=>{
    //     const {products}=this.state;
    //     const index=products.indexOf(product);
    //     if(products[index].qty!==0)
    //     products[index].qty-=1;
    //     this.setState({
    //         products:products
    //     })
    // }

    // handleDeleteProduct=(id)=>{
    //     const {products}=this.state;
    //     const items= products.filter((item)=>item.id!=id);
    //     //this will return a new array containing products whose id is not 
    //     //equal to the id that has been passed

    //     this.setState({
    //         products:items
    //     })
    // }
   
//render(){
    //const arr=[1,2,3,4,5];
    const {products}=props;
    return(
        <div className='cart'>
             {/* {
                 arr.map((item)=>{
                     return item+5
                 })
             } */}

             {/* <CartItem qty={1} price={99} title={"Watch"} img={''}/> */}
             {/* <CartItem />
             <CartItem /> */}
            
             {products.map((product)=>{
                 return (
                   <CartItem 
                        product={product} 
                        key={product.id}
                        // func={()=>console.log('sdsd')}
                        // isloggedin={false}
                        // jsx={<h1>Test</h1>}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                 )
             })}

        </div>
    );
//}
}

export default Cart;