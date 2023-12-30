// App.tsx
import React from "react";
import Octagon from "./screens/chart-3";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Octagon
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
  );
};

export default App;
