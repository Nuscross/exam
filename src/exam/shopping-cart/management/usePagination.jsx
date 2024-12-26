import { useState, useEffect } from "react";

const usePagination = (itemCart) => {

  const [menuList,setMenuList] = useState([]);
  const [dataInPage,setDataInPage] = useState([]);
  const [page,setPage] = useState(0);
  const [pageCount,setPageCount] = useState(0);

  useEffect(() => {
    const paginate = pagination(itemCart);
    setDataInPage(paginate);
    setMenuList(paginate[page] || []);
  }, [itemCart,page]);

  const pagination = (itemCart) => {
    const coffeePerPage = 6;
    const pages = Math.ceil(itemCart.length / coffeePerPage);
    setPageCount(pages);
    const newCoffee = Array.from({length:pages},(data,index)=>{
      const start = index * coffeePerPage;
      return itemCart.slice(start,start + coffeePerPage);
    });
    return newCoffee;
  }

  const handlePage = (index) => {
    setPage(index);
  }

  return { menuList, dataInPage, page, pageCount, handlePage };

}

export default usePagination;