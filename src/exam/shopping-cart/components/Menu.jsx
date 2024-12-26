import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../management/context";
import { addMenu } from "../management/slice/cartSlice";
import usePagination from "../management/usePagination";

const Menu = () => {

  const dispatch = useDispatch();

  const { menuCart, formatNumber, scrollToDiv } = useGlobalContext();

  const { menuList, dataInPage, page, pageCount, handlePage } = usePagination(menuCart);

  const menuRef = useRef(null);

  return (
    <>
      <div className="section-container menu" ref={menuRef}>
        <div className="content-container menu-container">
          <div className="menu-list">
            { menuList ? 
                menuList.map((item) => {
                  const { id, image, title, description, price } = item;
                  return (
                    <div key={id} className="menu-block">
                      <div className="photo" style={{ backgroundImage: `url(${image})`}}></div>
                      <h3 className="title">{title}</h3>
                      <p className="description">{description}</p>
                      <p className="price">{ formatNumber(price) } ฿</p>
                      <button 
                        type="button" 
                        className="btn-third" 
                        onClick={() => { 
                          dispatch(addMenu(item));
                        }}>
                          Add to Cart
                      </button> 
                    </div>
                  )
            })
              : 
              <div className="loading-content">
                <span className="loader"></span>
              </div>
            }
          </div>
        </div>
        { (pageCount && pageCount > 1) &&
          <div className='pagination-container'>
            <button 
              className={`page-btn ${page === 0 && 'hidden'}`}
              onClick={()=>{
                handlePage(page - 1);
                scrollToDiv(menuRef);
              }}
              >
              Prev
            </button>
            { dataInPage && dataInPage.map((data,index)=>{
              return (
                <button 
                  key={index} 
                  className={index === page ? 'page-btn active' : 'page-btn'} 
                  onClick={()=>{
                    handlePage(index);
                    scrollToDiv(menuRef);
                  }}>
                    {index+1}
                </button>)
            })}
            <button 
              className={`page-btn ${page === pageCount - 1 && 'hidden'}`}
              onClick={()=>{
                handlePage(page + 1);
                scrollToDiv(menuRef);
              }}
              >
              Next
            </button>
          </div> 
        }
      </div>
    </>
  )

}

export default Menu;