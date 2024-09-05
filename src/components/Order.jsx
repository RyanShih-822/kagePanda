import Card from "../ui/Card";

export default function Order({ ...props }) {
  return (
    <Card {...props}>
      <h3>您的訂單</h3>
      <div>
        <div>圖片</div>
        <div>復刻拿鐵</div>
        <div>L杯（600cc）</div>
        <div>少冰</div>
      </div>
      <div>
        <h3>Total</h3>
        <h3>$83</h3>
        <button>付款</button>
      </div>
    </Card>
  );
}
