import { Card, Carousel } from "@/components/ui";

export default function Banner() {
  return (
    <Card htmlTag="section" className="w-full flex-row p-0 overflow-hidden">
      <div className="d-flex flex-auto align-items-center basis-1/3">
        <a href="#">
          <img
            src="https://ap-south-1.linodeobjects.com/nidin-production-v3/store/icons/b_1681_icon_20230309_165110_0215b.png"
            alt="圖片"
          />
        </a>
        <div>
          <h1>瑞芳店</h1>
          <span>60蚺</span>
          <div className="d-flex">
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
          </div>
          <div>
            <span>icon</span>10:30~21:00
          </div>
          <div>
            <span>icon</span>02-2900-000
          </div>
          <div>
            <span>icon</span>新北市成功路三段123號
          </div>
        </div>
      </div>
      <Carousel />
    </Card>
  );
}
