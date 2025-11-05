import { getServices } from "@/api/admin/services/service.api";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

const ServiceList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  console.log({ data });
  // {
  //   data?.map((item) => <h1>{item.title}</h1>)
  // }

  const services = data.map((item) => ({
    id: item.id,
    name: item.title,
    description: item.body,
    price: item.price,
  }));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell className="font-medium">{service.description}</TableCell>
            <TableCell className="font-medium">{service.price}</TableCell>
            <TableCell className="text-right">
              <Button variant="destructive" className="p-2">
                <Trash2></Trash2>
              </Button>
            </TableCell>
            {/* <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Services</TableCell>
          <TableCell className="text-right">{services.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ServiceList;
