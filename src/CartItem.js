import React from 'react'

const CartItem=(props)=>{
    // constructor(){
    //     super();
    //     this.state={
    //         price:999,
    //         title:'Phone',
    //         qty:1,
    //         img:''
    //     }
    //     //this.increaseQuantity=this.increaseQuantity.bind(this);
   
    //    // this.testing1();
    // }
   

    // testing1 (){
    //    // console.log('ccccc');
    //     const promise=new Promise((resolve,reject)=>{
    //       //  console.log('eee');
    //         setTimeout(()=>{
    //         //console.log('bbbb');
    //             resolve('done');
    //         },5000);
    //         //resolve('done');
    //     });
    //     promise.then(()=>{
    //        // console.log('state in promise',this.state);

    //         //setstate acts like a synchronous call 
    //         this.setState({qty:100});
    //         //this.setState({qty:this.state.qty+10});
    //          console.log('state in promise',this.state);
    //     });
    // }

    // increaseQuantity=()=>{
    //     //this.state.qty+=1;
    //     //console.log('this.state',this.state);
    //     //setState form 1
    //     // this.setState({
    //     //     qty:this.state.qty+1
    //     // },()=>{});
    //     //setState form 2-if previous state required use this 
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty+1
    //         }
    //     },()=>{
    //        // console.log('state in increaseQuantity',this.state);//updated state will be printed 
    //     });
    //     //console.log(this.state); //updated state wont be shown
    // }
    // decreaseQuantity=()=>{
    //     const { qty }=this.state;
    //     if(qty==0){
    //         return ;
    //     }
    //     this.setState((prevState)=>{
    //         return {
    //                 qty:prevState.qty-1  
    //         }
    //     });
    // }
  //  render(){
        // console.log('render');
        //console.log('this.props',this.props);
        // const{price,title,qty}=this.state;

        // const{price,title,qty}=this.props.product;
        const{price,title,qty}=props.product;//this not needed as this is
        //is not a class anymore 

        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=props;
        return (
            <div className='cart-item'>
                {/* {this.props.jsx} */}
                <div className='left-block'>
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons*/}
                        <img
                           alt="increase"
                           className="action-icons"
                           src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1644228468~hmac=a94a52e493679ef50e5311e64f3c1f78"
                        //    onClick={this.increaseQuantity}
                          // onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                          onClick={()=>onIncreaseQuantity(product)}

                        />
                        <img 
                           alt="decrease" 
                           className="action-icons"
                           src="https://cdn-icons.flaticon.com/png/512/2734/premium/2734848.png?token=exp=1644228399~hmac=b1c30c98f3f2bb65138053ef4ce7c060"
                           //onClick={this.decreaseQuantity}
                           //onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                           onClick ={()=>onDecreaseQuantity(product)}
                       />
                        <img 
                           alt="delete" 
                           className="action-icons"
                           src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1644228509~hmac=91d12d6f2d3c2cf22c2a0969a219ea4d" 
                           onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div> 
                </div>
            </div>
        );
  //  }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc',
        alt:"Phone pic"
    }
}

export default CartItem;