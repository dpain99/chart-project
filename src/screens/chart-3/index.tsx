import React from "react";
import "./style.css";
import { type } from "@testing-library/user-event/dist/type";

interface RadarChartProps {
  data: { label: string; value: number }[];
  type: "kim" | "moc" | "thuy" | "hoa" | "tho";
}
const RadarChart = ({ data, type }: RadarChartProps) => {
  const convertData = (data: number) => {
    return data + 20;
  };

  const convertColorLabel = (type: string) => {
    if (type === "kim") {
      return "#C44023";
    }
    if (type === "moc") {
      return "#1D538F";
    }
    if (type === "thuy") {
      return "#442270";
    }
    if (type === "hoa") {
      return "#331C73";
    }
    if (type === "tho") {
      return "#00625C";
    } else return "black";
  };

  const convertStrokeColor = (type: string) => {
    if (type === "kim") {
      return "#EF9E00";
    }
    if (type === "moc") {
      return "#078E96";
    }
    if (type === "thuy") {
      return "#1B69BF";
    }
    if (type === "hoa") {
      return "#D62F6E";
    }
    if (type === "tho") {
      return "#C44023";
    } else return "black";
  };

  const cx = 250;
  const cy = 250;
  const hexagonCount = 6;
  const sides = 8;
  const maxRadius = 150;
  const lineWidths = [0.2, 0.4, 0.6, 0.8, 1, 1.2];

  const hexagonElements = Array.from({ length: hexagonCount }).map(
    (_, index) => {
      const radius = (maxRadius / hexagonCount) * (index + 1);

      const hexagonPoints = Array.from({ length: sides }).map((_, i) => {
        const angle = (i * (360 / sides) * Math.PI) / 180;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        return { x, y };
      });

      const lineWidth = lineWidths[index];

      return (
        <g key={index}>
          <polygon
            points={hexagonPoints
              .map((point) => `${point.x},${point.y}`)
              .join(" ")}
            fill="none"
            stroke={convertColorLabel(type)}
            strokeWidth={lineWidth}
          />
          {index === hexagonCount - 1 &&
            hexagonPoints.map((point, i) => (
              <text
                key={i}
                x={point.x}
                y={point.y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="13"
                fill={convertColorLabel(type)}
                fontFamily="Epilogue"
                fontWeight={"600"}
              >
                {data[i].label}
              </text>
            ))}
        </g>
      );
    }
  );

  const dataPoints = data.map(({ value }, i) => {
    const angle = (i * (360 / sides) * Math.PI) / 180;
    const normalizedValue = (convertData(value) / 120) * maxRadius;
    const x = cx + normalizedValue * Math.cos(angle);
    const y = cy + normalizedValue * Math.sin(angle);
    return { x, y };
  });

  const dataElements = dataPoints.map((point, i) => (
    <circle
      key={i}
      cx={point.x}
      cy={point.y}
      r="7"
      fill="white"
      stroke="black"
      strokeWidth="2"
      filter="url(#drop-shadow)"
    />
  ));

  const connectingLines = (
    <g>
      {dataPoints.map((point, i) => (
        <line
          key={i}
          x1={point.x}
          y1={point.y}
          x2={dataPoints[(i + 1) % dataPoints.length].x}
          y2={dataPoints[(i + 1) % dataPoints.length].y}
          stroke={convertStrokeColor(type)}
          strokeWidth="3"
        />
      ))}
    </g>
  );

  return (
    <svg width="500" height="500" className={`svg-chart-container ${type}`}>
      <defs>
        <filter id="drop-shadow" height="130%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3"
            floodColor="#000000"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      {hexagonElements}
      {connectingLines}
      {dataElements}
    </svg>
  );
};

export default RadarChart;
