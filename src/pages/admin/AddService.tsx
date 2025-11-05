import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const queryClient = useQueryClient()
  const {mutateAsync, isError, isSuccess} = useMutation({
    mutationFn:async (data) => {
      return await fetch('http://localhost:5000/api/v1/services', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey: ['services']})
    }
  })

  console.log(isError, isSuccess)

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault()
    const servicesData = {
      name: serviceName,
      description: 'Description',
      device: ['Mac', 'iPad'],
      price: 400,
    }
    console.log(servicesData)

    await mutateAsync()

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
