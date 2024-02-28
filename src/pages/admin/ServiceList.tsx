import { getServices } from "@/api/admin/services/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () => {



const  {data, isLoading, isError} = useQuery({
  queryKey: ['services'],
  queryFn: getServices,
})

if(isLoading){
  return <p>Loading...</p>
}

if(isError){
  return <p>Something went wrong</p>
}

console.log({data})

  return <div>
      {
        data?.map((item) => <h1>{item.title}</h1>)
      }
  </div>;
};

export default ServiceList;
