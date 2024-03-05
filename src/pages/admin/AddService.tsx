import { Button } from "@/components/ui/button";
import { useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");

  return (
    <div>
      <form>
        <input type="text" onChange={(e) => setServiceName(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
