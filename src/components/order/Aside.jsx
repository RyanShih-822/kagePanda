import { Card } from "@/components/ui";

export default function Aside({ ...props }) {
  return (
    <Card htmlTag="aside" className="order-aside align-self-start" {...props} />
  );
}
