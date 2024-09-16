import { Card, Button } from "@/components/ui";

export default function DiscountInfo() {
  return (
    <Card className="w-full">
      <ul className="d-flex gap-4 flex-wrap">
        {Array(4)
          .fill("")
          .map(() => (
            <li key={Math.random()}>
              <Button>
                <div>
                  <div>活動</div>
                  <div>自取-全品項買五送一</div>
                </div>
                <div>活動時間：2022-11-04 ~ 2073-11-30</div>
              </Button>
            </li>
          ))}
      </ul>
    </Card>
  );
}
