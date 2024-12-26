import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../management/context";
import { clearOrder } from "../management/orderSlice";
import { FaClock } from "react-icons/fa6";

const OrderHistory = () => {

  const dispatch = useDispatch();

  const { orderItems } = useSelector((state) => state.order);

  const { formatNumber } = useGlobalContext();

  return (
    <>
      <div className="section-container order" >
        <div className="content-container">
          <div style={{ overflowX: "scroll "}}>
            { orderItems.length > 0 ? 
              orderItems.map((item,index) => {
                const { order, total, date } = item;
                return (
                  <table key={index} className="order-table">
                    <thead>
                      <tr>
                        <th colSpan={5}>
                          <div className="order-title">
                              <FaClock />
                              {date}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      { order.map((item) => {
                          const { id, image, title, description, price, amount } = item;
                          const total = price * amount;
                          return (
                            <tr key={id}>
                              <td>
                                <div className="product-photo" style={{ backgroundImage: `url(${image})`}}></div>
                              </td>
                              <td style={{ minWidth: '300px' }}>
                                <h3 className="product-name">{title}</h3>
                                <p className="product-detail">{description}</p>
                              </td>
                              <td className="text-center" style={{ minWidth: '200px' }}>
                                <p className="product-price">{ formatNumber(price) } &nbsp;*&nbsp; {amount}</p>
                              </td>
                              <td className="text-center" style={{ minWidth: '200px' }}>
                                <p className="product-price">{ formatNumber(total) } ฿</p>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5} style={{ borderBottom: 0 }}>
                          <div className="product-total">
                            <span>TOTAL :</span> { formatNumber(total) } ฿
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                )})
              :
              <table className="order-table">
                <tbody>
                  <tr>
                    <td>
                      <p className="no-cart-item">No product order history.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          </div>
          { orderItems.length > 0 &&
            <div className="cart-button">
              <button 
                type="button" 
                className="btn-cart btn-primary" 
                onClick={() => {
                  dispatch(clearOrder());
                  window.scrollTo(0, 0);
                }}
              >
                Clear Order
              </button>
            </div>
          }
        </div>
      </div>
    </>
  )

}

export default OrderHistory;