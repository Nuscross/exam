import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const ExportCSV = () => {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  },[])

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=15");
      const data = await response.json();
      const productData = data.products.map(product => ({
        id: product.id,
        name: product.title,
        brand: product.brand,
        description: product.description,
        weight: product.weight,
        price: product.price,
      }))
      setProducts(productData);
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className="flex justify-between gap-5 p-5">
        <h1 className="text-4xl font-bold">Product List</h1>
        <button className="px-4 py-2 text-white bg-green-600 rounded-md">
          <CSVLink
            data={products}
            filename={"Products.csv"}
            target="_blank"
          >
            Export CSV
          </CSVLink>
        </button>
      </div>
      <hr />
      <div className="p-5">
        <div style={{ overflowX : 'auto' }}>
          <table className="table-product-list">
            <thead>
              <tr>
                <th width="5%">No.</th>
                <th width="20%">Name</th>
                <th width="15%">Brand</th>
                <th width="45%">Description</th>
                <th width="5%">Weight</th>
                <th width="10%">Price</th>
              </tr>
            </thead>
            <tbody>
              { products.length > 0 ? 
                products.map(product => {
                const { id, name, brand, description, weight, price } = product;
                return (
                  <tr key={id}>
                    <td className="text-center">{id}</td>
                    <td>{name}</td>
                    <td className="text-center">{brand}</td>
                    <td>{description}</td>
                    <td className="text-center">{weight}</td>
                    <td className="text-right">{price}</td>
                  </tr>
                )
                })
                :
                <tr>
                  <td colSpan={6} className="text-center">No Product Item</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>  
  )
}

export default ExportCSV;