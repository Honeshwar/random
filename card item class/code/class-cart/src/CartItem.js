


////////////////
// import React from 'react';

// class CartItem extends React.Component {
//   render () {
//     console.log('this.props', this.props);
//     const { price, title, qty ,img} = this.props.product;//product ,key , onIncreaseQuantity
//     return (
//       <div className="cart-item">
//         {this.props.jsx}
//         <div className="left-block">
//           <img style={styles.image} src={img} />
//         </div>
//         <div className="right-block">
//           <div style={ { fontSize: 25 } }>{title}</div>
//           <div style={ { color: '#777' } }>Rs {price} </div>
//           <div style={ { color: '#777' } }>Qty: {qty} </div>
//           <div className="cart-item-actions">
//             {/* Buttons */}
//             <img
//               alt="increase"
//               className="action-icons"
//               src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
//               onClick={()=>this.props.onIncreaseQuantity(this.props.product)}//cb  func. on click work
//             />
//             <img
//               alt="decrease"
//               className="action-icons"
//               src="https://cdn-icons-png.flaticon.com/128/7080/7080604.png"
//               onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
//             />
//             <img
//               alt="delete"
//               className="action-icons"
//               src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
//               onClick={()=>this.props.onDeleteQuantity(this.props.product)}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   image: {
//     height: 110,
//     width: 110,
//     borderRadius: 4,
//     background: '#ccc',
//     boxShadow:"0 0 10px 1px black"
//   }
// }

// export default CartItem;
//////////////////////////////


//if we don't need any state in component we use func comp instead of class component

function CartItem (props){

    console.log('props : ', props);
    const { price, title, qty ,img} = props.product;//product ,key , onIncreaseQuantity
    const {product,onDecreaseQuantity,onIncreaseQuantity,onDeleteQuantity} = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={img} />
        </div>
        <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>Rs {price} </div>
            <div style={ { color: '#777' } }>Qty: {qty} </div>
            <div className="cart-item-actions">
                {/* Buttons */}
                <img
                    alt="increase"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                    onClick={()=>onIncreaseQuantity(product)}//cb  func. on click work
                  />
                  <img
                    alt="decrease"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/7080/7080604.png"
                    onClick={()=>onDecreaseQuantity(product)}
                  />
                  <img
                    alt="delete"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png"
                    onClick={()=>onDeleteQuantity(product)}
                  />
             </div>
        </div>
      </div>
    );
  }

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
    boxShadow:"0 0 10px 1px black"
  }
}

export default CartItem;

/*  // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     // setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }
  increaseQuantity = () => {
    // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // }, () => {});

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  } */