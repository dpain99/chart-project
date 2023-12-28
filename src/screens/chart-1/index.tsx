import React from "react";
import "./style.css";

interface Chart1Props {
  title: string;
  detail: {
    label1: string;
    value1: number | string;
    label2: string;
    value2: number | string;
  }[];
  type: "kim" | "moc" | "thuy" | "hoa" | "tho";
}
const Chart1 = ({ title, detail, type }: Chart1Props) => {
  const renderLabel = (label: string, value: number | string) => (
    <span className="label" style={{ width: `${value}%` }}>
      {label}
    </span>
  );

  const renderChartDetail = (value: number | string) => (
    <div className={`chart ${type}`} style={{ width: `${value}%` }}></div>
  );

  return (
    <div className={`chart1-container ${type}`}>
      <span className="title-chart">{title}</span>
      <div className="chart1">
        {detail.map((item, index) => (
          <div className="chart-single" key={index}>
            <div className="description-chart">
              {renderLabel(item.label1, item.value1)}
              {renderLabel(item.label2, item.value2)}
            </div>
            <div className="chart-detail">
              {renderChartDetail(item.value1)}
              {renderChartDetail(item.value2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart1;
