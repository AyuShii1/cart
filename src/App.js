import React from 'react';
import firebase from 'firebase/app';

import Cart from './Cart'
import Navbar  from './Navbar';

 class App extends React.Component{

  constructor(){
    super();
    this.state={
       products:[],
       loading: true//we are setting up the loader becoz it takes some time
       // to load the products from the firebase ...
    }
    this.db=firebase.firestore();
}

componentDidMount(){
  // firebase
  //  .firestore()
  //  .collection('products')//returns reference to collection 
  //  .get()//.get method will return a promise that will be resolved, also
  //  //returns me as a result in promise query snapshot  
  //  .then((snapshot)=>{//calling call back with a snapshot as an arguement
  //   //i used the word snapshot becoz it gives me a snapshot of the database
  //   //at that particular time
  //    console.log(snapshot);

  //   //  //docs is an array of all the documents in the query snapshot
  //   //  snapshot.docs.map((doc)=>{
  //   //    console.log(doc.data())//getting data from the doc
  //   //    //data fn retrieves all the fields in the document as an object
  //   //  });
     
  //    //when we fetch the products we set state so that the browser 
  //    //should rerender and it will display me all the products 
  //    const products=snapshot.docs.map((doc)=>{//getting products
  //      const data=doc.data();
  //      data['id']=doc.id;//getting the product id that was auto generated
  //      return data;
  //      //return doc.data()//becoz we want data in the doc
  //    });
  //    this.setState({
  //      //products:products
  //      products,
  //      loading:false
  //    })
  //  })


  firebase
  .firestore()
  .collection('products')
  // .where('price','==',999)
  ////sorting the data according to price
  ////ascending order is by default
  //.orderBy('price')
  .orderBy('price','desc')
  .onSnapshot( (snapshot)=>{
    console.log(snapshot);

    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    });

    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    });
    this.setState({
      products,
      loading:false
    });
  });
}

handleIncreaseQuantity=(product)=>{
    console.log('Heyy please inc the qty of ', product);
    const {products}=this.state;
    const index=products.indexOf(product);

    // products[index].qty+=1;//here we are increasing the quatity in a state
    // //now we gonna increase the quantity in a firebase
    // //when we change the quantity in firebase that means something has been changed in firebase
    // //so onsnapshot fn will be called and will automatocally set our state

    // this.setState({
    //     products:products
    // })

    //we will get the refernce of that particular document in firebase
    //suppose i click on plus button then i will get the reference of that object only
    //in firebase with its id
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
     .update({
       qty:products[index].qty+1
     })
     .then(()=>{
       console.log('Updated successfully')
     })
     .catch((error)=>{
       console.log('Error:',error);
     })
}

handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
     if(products[index].qty===0){
       return;
     }
    // products[index].qty-=1;
    // this.setState({
    //     products:products
    // })
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
     .update({
       qty:products[index].qty-1
     })
     .then(()=>{
       console.log('Updated successfully')
     })
     .catch((error)=>{
       console.log('Error:',error);
     })
}

handleDeleteProduct=(id)=>{
    const {products}=this.state;
    // const items= products.filter((item)=>item.id=id);
    // //this will return a new array containing products whose id is not 
    // //equal to the id that has been passed

    // this.setState({
    //     products:items
    // })

    const docRef=this.db.collection('products').doc(id);
    docRef
     .delete()
     .then(()=>{
       console.log('Deleted succesfully');
     })
     .catch((error)=>{
       console.log('Error',error);
     })
}

getCartCount=()=>{
  const {products}=this.state;

  let count =0;
 products.forEach((product)=>{
   count+=product.qty;
 })
  return count;
}

getCartTotal=()=>{
 const {products}=this.state;
 let cartTotal=0;
 products.map((product)=>{
   if(product.qty>0){
    cartTotal=cartTotal+product.qty*product.price;
   }
   return '';
 })
 return cartTotal;
}

addProduct=()=>{
  // firebase
  //  .firestore()
  //or
  this.db
   .collection('products')
   //passing the object which will represent a product
   .add({
     img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605304770/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/8999312031774.png/mxw_2048,f_auto',
     price:900,
     qty:4,
     title:'Washing Machine'
   })
   //jo abhi upar hamne object banaya hai uska reference 
   //hame firebase pe milega
   //jo upar object banaya hai that will be converted to a document
   //added to our collection products
   .then((docRef)=>{
     console.log('Product has been added ',docRef);
   })
   .catch((error)=>{
     console.log('Error:',error);
   });
}
render (){
  const {products,loading}=this.state;
  // getting loading from the state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button>
      <Cart 
      products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}
       />
       {loading && <h1>Loading Products....</h1>}
       {/* {if loading is true} */}
       <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
