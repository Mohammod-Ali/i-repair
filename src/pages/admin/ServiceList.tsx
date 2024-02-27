import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {

// const [data, setData] = useState([])
// const [error, setError] = useState([])

// const getData = async() => {

// }

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then( data => setData(data))
// },[])

const  {data, isLoading, } = useQuery({
  queryKey: ['services'],
  queryFn: getServices,
})

if(isLoading){
  return <p>Loading...</p>
}

console.log({data})

  return <div>
      {
        data?.map((item) => <h1>{item.title}</h1>)
      }
  </div>;
};

export default ServiceList;
