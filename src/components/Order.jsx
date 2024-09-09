import { Card, Button } from "../ui";

export default function Order({ ...props }) {
  return (
    <aside className="h-full" style={{ width: "352px" }}>
      <Card {...props}>
        <h3>您的訂單</h3>
        <ul className="py-4">
          <li>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="https://images.deliveryhero.io/image/fd-tw/Products/10671216.jpg?width=48&height=48&quot"
                  alt="訂單"
                />
              </div>
              <div className="text-end">
                <div>復刻拿鐵</div>
                <div>L杯</div>
                <div>少冰</div>
              </div>
            </div>
          </li>
        </ul>

        <div>
          <h3>Total</h3>
          <h3>$83</h3>
          <Button className="w-full bg-primary text-light">付款</Button>
        </div>
      </Card>
    </aside>
  );
}
