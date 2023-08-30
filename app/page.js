"use client";
import axios, {Axios} from 'axios'
import { useEffect, useState } from 'react'

const page = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true)


  const api = `https://dummyjson.com/products`

  const getApidata =  async (url) =>{
    try {
      const result = await axios.get(url);
      setData(result.data.products)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }


useEffect(() => {
  getApidata(api);
}, [])

  

  // useEffect(() => {
  //   axios.get(`https://dummyjson.com/products`)
  //   .then((res) =>{
  //     // console.log(res.data.products);
  //     setData(res.data.products)
  //   }).catch(err => {setError(err.message)})
  // }, [])
  
  
  

  if(loading) {
    return (
      <h1>Loading ....</h1>
    )
  }


  return (
    <>

{error !== "" && <h2>{error}</h2> }

      {data.map((element, index) => {
        const {title, thumbnail, price} = element;

        return (
          <div className='card' key={index}>
            <h4>{title}</h4>
            <img src={thumbnail} alt="" />
            <small>{price}</small>
          </div>
        )

      })}
    </>
  )
}

export default page