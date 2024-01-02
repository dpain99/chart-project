// App.tsx
import React from "react";
import RadarChart from "./screens/chart-3";
import Chart5 from "./screens/chart-5";
import Chart1 from "./screens/chart-1";

const App: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RadarChart
          data={[
            { label: "Nhóm truyền thông", value: 100 },
            { label: "Nhóm giáo dục", value: 60 },
            { label: "Nhóm kinh doanh", value: 40 },
            { label: "Nhóm nghệ thuật", value: 75 },
            { label: "Nhóm luật pháp", value: 90 },
            { label: "Nhóm dịch vụ", value: 50 },
            { label: "Nhóm khoa học kỹ thuật", value: 30 },
            { label: "Nhóm y tế", value: 30 },
          ]}
          type={"thuy"}
          size={600}
        />
        {/* <Chart3
          data={[
            {
              label: "Nhóm truyền thông",
              value: 6,
            },
            {
              label: "Nhóm giáo dục",
              value: 6,
            },
            {
              label: "Nhóm kinh doanh",
              value: 4,
            },
            {
              label: "Nhóm nghệ thuật",
              value: 4,
            },
            {
              label: "Nhóm luật pháp",
              value: 5,
            },
            {
              label: "Nhóm dịch vụ",
              value: 6,
            },
            {
              label: "Nhóm khoa học kỹ thuật",
              value: 5,
            },
            { label: "Nhóm y tế", value: 5 },
          ]}
          type={"tho"}
        /> */}
      </div>
      <div>
        <Chart5
          data={[
            {
              title: "Thiên thời",
              label: "Sinh xuất",
              description: "Không tốt",
              value: 30,
            },
            {
              title: "Địa lợi",
              label: "Đồng hành",
              description: "Rất tốt",
              value: 100,
            },
            {
              title: "Tổng quan",
              label: "Bình ổn",
              value: 59,
            },
          ]}
          type={"hoa"}
        />
      </div>
      <div>
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
              value1: 7.0,
              label2: "Thích thao túng",
              value2: 3.0,
            },
            {
              label1: "Nhạy cảm / Hay suy nghĩ",
              value1: 3.6,
              label2: "Giỏi xử lý căng thẳng",
              value2: 6.4,
            },
          ]}
          type="kim"
          flex={7}
          flex2={7}
        />
      </div>
    </>
  );
};

export default App;
