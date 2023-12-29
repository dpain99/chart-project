import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chart1 from "./screens/chart-1";
import Chart5 from "./screens/chart-5";
import Chart3 from "./screens/chart-3";

function App() {
  return (
    <div className="App">
      <div>
        {/* <Chart1
          title={"Tính cách khuynh hướng"}
          detail={[
            {
              label1: "Thực tế / Không thích mạo hiểm",
              value1: 30,
              label2: "Phiêu lưu / Tinh thần mạo hiểm",
              value2: 70,
            },
            {
              label1: "Tuân theo tự nhiên",
              value1: 40,
              label2: "Kế hoạch / Tự chủ",
              value2: 60,
            },
            {
              label1: "Hướng ngoại / Dễ gần",
              value1: 48,
              label2: "Hướng nội / Không thích chú ý",
              value2: 52,
            },
            {
              label1: "Tư duy nhóm",
              value1: 35,
              label2: "Tư duy độc lập",
              value2: 65,
            },
            {
              label1: "Dễ đồng cảm",
              value1: 70,
              label2: "Thích thao túng",
              value2: 30,
            },
            {
              label1: "Nhạy cảm / Hay suy nghĩ",
              value1: 36,
              label2: "Giỏi xử lý căng thẳng",
              value2: 64,
            },
          ]}
          type="moc"
        /> */}
        {/* <Chart5
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
        /> */}

        <Chart3
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
        />
      </div>
    </div>
  );
}

export default App;
