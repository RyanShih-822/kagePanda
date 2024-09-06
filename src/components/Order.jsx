import { Card, Button } from "../ui";

export default function Order({ ...props }) {
  return (
    <Card {...props}>
      <h3 className="d-flex">您的訂單</h3>
      <div>
        <div>
          <img
            src="https://images.deliveryhero.io/image/fd-tw/Products/10671216.jpg?width=48&height=48&quot"
            alt="訂單"
          />
        </div>
        <div>復刻拿鐵</div>
        <div>L杯（600cc）</div>
        <div>少冰</div>
      </div>
      <div>
        <h3>Total</h3>
        <h3>$83</h3>
        <Button>付款</Button>
      </div>
    </Card>
  );
}
