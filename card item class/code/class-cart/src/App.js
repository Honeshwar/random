import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class  App extends React.Component {
  constructor () {
    super();
    //  this.state={}
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
    this.state = {
      products: [],
      loading:true
    }
    this.db = firebase.firestore();
  }
  // state = {
  //   products: [],
  //   loading:true
  // }

  //when react is mounted than get 
  componentDidMount(){
    // firebase
    // .firestore()
    // .collection('products')
    // .get()//promise return 
    // .then((snapshot)=>{
    //   console.log(snapshot);//collection snapshot

    //   snapshot.docs.map((doc)=>{//docs an array of documents
    //     console.log(doc.data());
    //     return doc.data();//it get me only data from array element not entire obj/doc
    //   })
    //   const products = snapshot.docs.map((doc)=>{//products an array(map return an array)  contain all product
    //     return doc.data();
    //   })

    //   // update state ,state up that array(above)
    //   this.setState({
    //     products:products,
    //     loading:false//do false when data we get from fireStore
    //   })
    // })

    //use listener than on any change in firestore(db) it get fired (execute code we write in it),state change re-render component,firebase(firestore)synced UI create
    //snapshot behave like get on refresh and listener
    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{//attach listener (it work somewhat like web socket )
      console.log(snapshot);//collection snapshot

      snapshot.docs.map((doc)=>{//docs an array of documents
        console.log(doc.data());
        return doc.data();//it get me only data from array element not entire obj/doc
      })
      const products = snapshot.docs.map((doc)=>{//products an array(map return an array)  contain all product
        let data=doc.data();
        data["id"]=doc.id;//react library want "key" for each sibling components,so update,get... fast
        return data;
      })

      // update state ,state up that array(above)
      this.setState({
        products:products,
        loading:false//do false when data we get from fireStore
      })
    });
    


  }
//increase quantity cart item
    handleIncreaseQuantity=(product)=>{
        console.log(product);
        const {products} =this.state;
        // find than cardItem when on inc click,array  find index of product
        const index = products.indexOf(product);
      //finding doc in firestore,docRef =obj/doc reference
        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
          qty:products[index].qty + 1
        })//promise
        .then(() => {
          console.log("quantity is updated");
        }).catch((err) => {
          console.log("error while update qty",err);
        });
//directly firestore change karage with onShanpshot listener help automatically update(code we write us se)

    //         products[index].qty +=1;
    // //use to re-render component(cart item)
    //         this.setState({
    //         products// products:products
    //         });

    }
//decrease quantity cart item
    handleDecreaseQuantity=(product)=>{
        console.log(product);
        const {products} =this.state;
    // find than cardItem when on inc click
        const index = products.indexOf(product);
        if( products[index].qty==0){
            return;
        }

      //finding doc in firestore,docRef =obj/doc reference
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef.update({
        qty:products[index].qty - 1
      })//promise
      .then(() => {
        console.log("quantity is updated");
      }).catch((err) => {
        console.log("error while update qty",err);
      });



    //     products[index].qty -=1;
    // //use to re-render component(cart item)
    //     this.setState({
    //     products// products:products
    //     });

    }
//delete cart item
    handleDeleteQuantity=(product)=>{//product / pass id
        console.log(product);
        const {products} = this.state;// same reference
    // find than cardItem when on inc click
        const index = products.indexOf(product);

        //finding doc in firestore,docRef =obj/doc reference
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
      .delete()//promise
      .then(() => {
        console.log("delete successfully");
      }).catch((err) => {
        console.log("error while deleting",err);
      });




        // products.splice(index,1);
    //use filter method to filter out all element expect
        // const items = products.filter((e)=> e!=product);//through id can do also

    //use to re-render component(cart item)
        // this.setState({
        // // products// products:pro ducts//same reference change 
        // });

        // this.setState({}); //{} means empty, no change in state "just re-render" all child component(card items) again

    }

// finding total quantity
    getTotalQuantity=()=>{
    const {products}=this.state;// state obj//obj destructuring assigning , p=this.state.products
    let count=0;
    products.forEach((productItem)=>{
      count += productItem.qty
    });
    return count;
    }

//finding total prize
   getTotalPrize=()=>{
    const {products} = this.state;
    let totalPrize = 0;
    //map , return new array
    // products.map((product)=>{
    //   totalPrize = totalPrize + product.price * product.qty;
    // });

    // for each iterate, just iterate over array
    products.forEach((product)=>{
      totalPrize = totalPrize + product.price * product.qty;
    });


    return totalPrize;
   }

   addProduct=()=>{
    this.db.collection('products').add({
      price: 909,
      title: 'Watch',
      qty: 3,
      img: 'https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559__340.jpg',
     
    })//return promise
    .then((docRef)=>{
      console.log("product is added" , docRef);    
     //onSnapshot listener fired from firestore above write line number 50 and show product in react app
    }).catch((error)=>{
      console.log("error while adding product to firestore",error);
    })
   }
    
// we create render func. automatically  react.Comp library call it
  render(){
      return (
        <div className="App">
          <Navbar count={this.getTotalQuantity()}/>
          <button onClick={this.addProduct}>Add Product</button>
          <Cart 
          products={this.state}
          onIncreaseQuantity={this.handleIncreaseQuantity}//pass to props an func.
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
          />
          {this.loading && <h2>Please wait is loading...</h2>}
          <div style={{padding:10,fontSize:30,background:"gray"}}>Total Prize : {this.getTotalPrize()}</div> {/* //call for each render */}
        </div>
      );
  }
}

export default App;


 // now fill it from firebase  db data so we comment it below
      // {
      //   price: 99,
      //   title: 'Watch',
      //   qty: 1,
      //   img: 'https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559__340.jpg',
      //   id: 1,
      // },
      // {
      //   price: 999,
      //   title: 'Mobile Phone',
      //   qty: 10,
      //   img: 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg',
      //   id: 2,
      // },
      // {
      //   price: 999,
      //   title: 'Laptop',
      //   qty: 4,
      //   img: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg',
      //   id: 3,
      // }