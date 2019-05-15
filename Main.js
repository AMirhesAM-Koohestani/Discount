import React from 'react';

class Main extends React.Component{
   state={
      i_price:'',
      discount:'',
      f_price:''
   }

   iPriceChange = (e) => {
      const i_price = e.target.value;
      this.setState(() => ({
         i_price
      }));
   }

   discountChange = (e) => {
      let discount = e.target.value;
      discount = Number((Math.floor(discount * 100) / 100).toFixed(2))
      if(discount <= 100 && discount >= 0){
         this.setState(() => ({
            discount
         }));
      }
   }

   

   onFormSub = (e) => {
      e.preventDefault();
      if(this.state.i_price && this.state.discount){
         const f_price = (((100 - this.state.discount)/100) * this.state.i_price).toFixed(2);
         console.log(f_price);
         this.setState(() => ({
            f_price
         }));
      }
   }

   render() {
      return (
         <div>
            <form onSubmit={this.onFormSub} >
               enter initial price: <input type="number" min="0" value={this.state.i_price} onChange={this.iPriceChange} /> <br/>
               enter discount%: <input type="number" min="0" max="100" step="any" value={this.state.discount} onChange={this.discountChange} /> <br/>
               <button>apply discount</button>
            </form>
            <hr/>
            {this.state.f_price && <p>final price is: {this.state.f_price} $</p>}
         </div>
      );
   }
}

export default Main;