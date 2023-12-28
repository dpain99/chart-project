import React from "react";
import "./style.css";

interface Chart5Props {
  data: {
    title: string;
    label: string;
    description?: string;
    value: string | number;
  }[];
  type: "kim" | "moc" | "thuy" | "hoa" | "tho";
}

const Chart5 = ({ data, type }: Chart5Props) => {
  return (
    <div className={`chart5-container ${type}`}>
      {data.map((item, index) => (
        <div className="single-chart5" key={index}>
          <span className={`title-chart5 ${type}`}>{item.title}</span>
          <div className={`border-circle ${type}`}>
            <div
              className={`inside-circle ${type}`}
              style={{ width: `${item.value}%`, height: `${item.value}%` }}
            ></div>
            <div className="label-circle">
              <span className="label-chart5">{item.label}</span>
              <span className="label-chart5">
                {item.description !== undefined ? `(${item.description})` : ""}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chart5;
