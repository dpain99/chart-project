import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Bambo2 from "./bambo/Bambo2";
import Bambo1 from "./bambo/Bambo1";

interface Chart1Props {
  title: string;
  detail: {
    label1: string;
    value1: number;
    label2: string;
    value2: number;
  }[];
  type: "kim" | "moc" | "thuy" | "hoa" | "tho";
  flex?: number;
  flex2?: number;
}
const Chart1 = ({ title, detail, type, flex, flex2 }: Chart1Props) => {
  const chartDetailRef = useRef<HTMLDivElement | null>(null);
  const [chartDetailWidth, setChartDetailWidth] = useState<number | undefined>(
    undefined
  );

  const renderLabel = (label: string) => <span className="label">{label}</span>;

  const renderChartDetail1 = (value: number, type: string) =>
    chartDetailWidth !== undefined && (
      <Bambo1
        width={(chartDetailWidth / 100) * value * 10}
        height={(chartDetailWidth / 100) * 2.3}
        type={type}
        flex={flex}
      />
    );
  const renderChartDetail2 = (value: number, type: string) =>
    chartDetailWidth !== undefined && (
      <Bambo2
        width={(chartDetailWidth / 100) * value * 10}
        height={(chartDetailWidth / 100) * 2.3}
        type={type}
        flex2={flex2}
      />
    );

  useEffect(() => {
    const handleResize = () => {
      if (chartDetailRef.current) {
        const width = chartDetailRef.current.offsetWidth;
        if (width !== chartDetailWidth) {
          setChartDetailWidth(width);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chartDetailWidth]);

  return (
    <div className={`chart1-container ${type}`}>
      <span className="title-chart">{title}</span>
      <div className="chart1">
        {detail.map((item, index) => (
          <div className="chart-single" key={index}>
            <div className="description-chart">
              {renderLabel(item.label1)}
              {renderLabel(item.label2)}
            </div>
            <div className="chart-detail" ref={chartDetailRef}>
              {renderChartDetail1(item.value1, type)}
              {renderChartDetail2(item.value2, type)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart1;
