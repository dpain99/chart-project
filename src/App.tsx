// App.tsx
import React from "react";
import RectangleComponent from "./screens/chart-1/bambo/Bambo1";
import Chart1 from "./screens/chart-1";

const App: React.FC = () => {
  return (
    <div>
      {/* <RectangleComponent /> */}
      <Chart1
        title={"Tính cách khuynh hướng"}
        detail={[
          {
            label1: "Thực tế / Không thích mạo hiểm",
            value1: 3,
            label2: "Phiêu lưu / Tinh thần mạo hiểm",
            value2: 7,
          },
          {
            label1: "Tuân theo tự nhiên",
            value1: 4,
            label2: "Kế hoạch / Tự chủ",
            value2: 6,
          },
          {
            label1: "Hướng ngoại / Dễ gần",
            value1: 4.8,
            label2: "Hướng nội / Không thích chú ý",
            value2: 5.2,
          },
          {
            label1: "Tư duy nhóm",
            value1: 3.5,
            label2: "Tư duy độc lập",
            value2: 6.5,
          },
          {
            label1: "Dễ đồng cảm",
            value1: 7,
            label2: "Thích thao túng",
            value2: 3,
          },
          {
            label1: "Nhạy cảm / Hay suy nghĩ",
            value1: 3.6,
            label2: "Giỏi xử lý căng thẳng",
            value2: 6.4,
          },
        ]}
        type="hoa"
      />
    </div>
  );
};

export default App;
