import { getServices } from "@/api/admin/services/service.api";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";

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
// {
//   data?.map((item) => <h1>{item.title}</h1>)
// }

const services = data.map(i =>({
  name: i.title,
  description: i.body,

}))

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ]

  return <Table>
  <TableHeader>
    <TableRow>
      <TableHead >name</TableHead>
      <TableHead>description</TableHead>
      {/* <TableHead>Method</TableHead> */}
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {services.map((service) => (
      <TableRow key={service.name}>
        <TableCell className="font-medium">{service.description}</TableCell>
        <TableCell className="text-right">
          <Button variant='destructive' className="p-2"><Trash2></Trash2></Button>
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
};

export default ServiceList;
