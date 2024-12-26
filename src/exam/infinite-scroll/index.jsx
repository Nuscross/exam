import { useEffect, useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const InfiniteScroll = () => {

  const [postList,setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    },1500)
  },[pageNumber])

  const fetchData = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`);
      const data = await response.json();
      setPostList(prevData => {
        return [...prevData, ...data]
      })
      setIsLoading(false);
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  return (
    <div className="px-6 py-10">
      <h1 className="pb-10 text-4xl font-bold text-center">Infinite Scroll</h1>
      { postList && postList.map((list,index) => {
        const { title, body } = list; 
        return (
          <div key={index} className="mb-5 mx-auto p-6 max-w-full w-[680px] border border-solid border-black rounded-lg bg-gray-200">
            <p className="mb-2">
              <span className="font-bold">Post ID :</span> {index + 1}
            </p>
            <p className="mb-2">
              <span className="font-bold">Post Title :</span> {title}
            </p>
            <p>
              <span className="font-bold">Post Detail :</span>
              <br />
              {body}
            </p>
          </div>
        )
      })}
      { isLoading && 
        <div className="flex items-center justify-center">
          <ImSpinner3 className="loading-icon" />
        </div>
      }
    </div>
  )
}

export default InfiniteScroll;