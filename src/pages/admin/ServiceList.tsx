import { useEffect, useState } from "react";
import { json } from "stream/consumers";

const ServiceList = () => {

const [data, setData] = useState([])
const [error, setError] = useState([])

const getData = async() => {

}

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then( data => setData(data))
},[])

  return <div>
        This is service components
  </div>;
};

export default ServiceList;
