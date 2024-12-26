import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../management/context";
import { removeMenu, increase, decrease, clearCart } from "../management/slice/cartSlice";
import { saveOrder } from "../management/slice/orderSlice";
import { FaWindowClose, FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const Cart = () => {

  const dispatch = useDispatch();

  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const { formatNumber } = useGlobalContext();

  return (
    <>
      <div className="section-container cart">
        <div className="content-container">
          <div style={{ overflowX: "scroll "}}>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th style={{ minWidth: '300px' }}>Product</th>
                  <th style={{ minWidth: '150px' }}>Price</th>
                  <th>Quantity</th>
                  <th style={{ minWidth: '150px' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                { cartItems.length > 0 ? 
                  cartItems.map((item) => {
                    const { id, image, title, description, price, amount } = item;
                    const total = price * amount;
                    return (
                      <tr key={id}>
                        <td>
                          <FaWindowClose onClick={() => dispatch(removeMenu(item))} />
                        </td>
                        <td>
                          <div className="product-photo" style={{ backgroundImage: `url(${image})`}}></div>
                        </td>
                        <td>
                          <h3 className="product-name">{title}</h3>
                          <p className="product-detail">{description}</p>
                        </td>
                        <td>
                          <p className="text-center product-price">{ formatNumber(price) } ฿</p>
                        </td>
                        <td>
                          <div className="product-amount">
                            <FaMinusSquare onClick={() => dispatch(decrease(id))} />
                            <div className="input-amount">{amount}</div>
                            <FaPlusSquare onClick={() => dispatch(increase(id))} />
                          </div>
                        </td>
                        <td>
                          <p className="text-center product-price">{ formatNumber(total) } ฿</p>
                        </td>
                      </tr>
                    )})
                  : 
                  <tr>
                    <td colSpan={6}>
                      <p className="no-cart-item">No product item in shopping cart.</p>
                    </td>
                  </tr>
                } 
              </tbody>
              {
                cartItems.length > 0 &&
                <tfoot>
                  <tr>
                    <td colSpan={6} style={{ borderBottom: 0 }}>
                      <div className="product-total">
                        <span>TOTAL :</span> { formatNumber(totalPrice) } ฿
                      </div>
                    </td>
                  </tr>
                </tfoot>
              }
            </table>
          </div>
          <div className="cart-button">
            <button 
              type="button" 
              className="btn-cart btn-primary" 
              onClick={() => {
                dispatch(saveOrder({cartItems,totalPrice}));
                dispatch(clearCart());
                window.scrollTo(0, 0);
              }}    
            >
              Save Order
            </button>
            <Link to='/order-history' className="btn-cart btn-third" onClick={() => window.scrollTo(0, 0)}>Order History</Link>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Cart;