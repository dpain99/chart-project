import React, { useEffect, useRef, useState } from "react";
import thuyImg from "../../themes/image/thuy.png";
import kimImg from "../../themes/image/kim.png";
import mocImg from "../../themes/image/moc.png";
import hoaImg from "../../themes/image/hoa.png";
import thoImg from "../../themes/image/tho.png";
import "./style.css";

interface RadarChartProps {
  data: { label: string; value: number }[];
  type: "kim" | "moc" | "thuy" | "hoa" | "tho";
  size?: number;
}
const RadarChart = ({ data, type, size }: RadarChartProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [cx, setCx] = useState<number>(0);
  const [cy, setCy] = useState<number>(0);

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

  const convertTypeToImagePoint = (type: string) => {
    if (type === "kim") {
      return kimImg;
    }
    if (type === "moc") {
      return mocImg;
    }
    if (type === "thuy") {
      return thuyImg;
    }
    if (type === "hoa") {
      return hoaImg;
    }
    if (type === "tho") {
      return thoImg;
    } else return kimImg;
  };

  useEffect(() => {
    const svgElement = svgRef.current;

    if (svgElement) {
      const { width, height } = svgElement.getBoundingClientRect();
      const newCx = width / 2;
      const newCy = height / 2;

      setCx(newCx);
      setCy(newCy);
    }
  }, [data, type]);

  const hexagonCount = 6;
  const sides = 8;

  const maxRadius = (cx / 5) * 2;
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

      const labelPoint = (x: number, y: number, i: number) => {
        if (i === 0 || i === 1 || i === 7) {
          const newX = x + 25;
          return [newX, y, "start"];
        } else if (i === 3 || i === 4 || i === 5) {
          const newX = x - 25;
          return [newX, y, "end"];
        } else if (i === 2) {
          const newY = y + 25;
          return [x, newY, "middle"];
        } else if (i === 6) {
          const newY = y - 25;
          return [x, newY, "middle"];
        } else return [x, y, "middle"];
      };

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
                x={labelPoint(point.x, point.y, i)[0]}
                y={labelPoint(point.x, point.y, i)[1]}
                textAnchor={`${labelPoint(point.x, point.y, i)[2]}`}
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
    <image
      key={i}
      x={point.x - maxRadius / 3 / 2}
      y={point.y - maxRadius / 3 / 2}
      width={maxRadius / 3}
      height={maxRadius / 3}
      href={convertTypeToImagePoint(type)}
      filter="url(#dropshadow)"
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
    <svg
      width={size}
      height={size}
      className={`svg-chart-container ${type}`}
      ref={svgRef}
    >
      {hexagonElements}
      {connectingLines}
      {dataElements}
    </svg>
  );
};

export default RadarChart;
