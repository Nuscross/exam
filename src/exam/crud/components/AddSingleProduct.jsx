const AddSingleProduct = ({bookCategory, errors, register, handleSubmit, onSubmit, bookFilter = []}) => {

  return (
    <div className="mx-auto py-10 px-6 max-w-[1140px]">
      <div className="mx-auto px-6 py-8 max-w-full w-[500px] bg-orange-200 rounded-lg">
        <h1 className="mb-5 w-full font-bold text-2xl text-center">
          { bookFilter.length > 0 ? "Edit Book" : "Add Book" }
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block mb-2 font-bold">Book Name</label>
            <input
              type="text"
              name="bookName"
              placeholder="Book Name"
              className={`p-2 w-full text-sm border border-solid border-white rounded ${errors.bookName && 'border-2 border-red-500'}`}
              { ...register('bookName', { required: "* Book Name is required." }) }
            />
            { errors.bookName && 
              <div className="validate-error">{ errors.bookName.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2 font-bold">Category</label>
            <select
              name="category"
              className={`p-2 w-full text-sm border border-solid border-white rounded ${errors.category && 'border-2 border-red-500'}`}
              { ...register('category', { required: "* Category is required." }) }
            >
              <option value="">Select Category</option>
              { bookCategory.map((category,index) => {
                return <option key={index} value={category}>{category}</option>
              })}
            </select>
            { errors.category && 
              <div className="validate-error">{ errors.category.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2 font-bold">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Author"
              className={`p-2 w-full text-sm border border-solid border-white rounded ${errors.author && 'border-2 border-red-500'}`}
              { ...register('author', { required: "* Author is required." }) }
            />
            { errors.author && 
              <div className="validate-error">{ errors.author.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2 font-bold">Short Description</label>
            <textarea
              rows={5}
              name="description"
              placeholder="Short Description"
              className={`p-2 w-full text-sm border border-solid border-white rounded ${errors.description && 'border-2 border-red-500'}`}
              { ...register('description', { required: "* Short Description is required." }) }
            />
            { errors.description && 
              <div className="validate-error">{ errors.description.message }</div> 
            }
          </div>
          <div>
            <label className="block mb-2 font-bold">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className={`p-2 w-full text-sm border border-solid border-white rounded ${errors.price && 'border-2 border-red-500'}`}
              { ...register('price', { required: "* Price is required." }) }
            />
            { errors.price && 
              <div className="validate-error">{ errors.price.message }</div> 
            }
          </div>
          <button type="submit" className={`mt-3 p-2 text-white rounded ${bookFilter.length > 0 ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-500 hover:bg-blue-600"}`}>
            { bookFilter.length > 0 ? "Update" : "Submit" }
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddSingleProduct;