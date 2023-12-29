import React, { useEffect, useRef } from "react";
import "./style.css";
interface RadarChartProps {
  data: { label: string; value: number }[];
  type: "kim" | "moc" | "thuy" | "hoa" | "tho";
}

const RadarChart: React.FC<RadarChartProps> = ({ data, type }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const padding = 40;
    const scaleFactor = 2;

    const canvasWidth = 300 * scaleFactor;
    const canvasHeight = 300 * scaleFactor;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.scale(scaleFactor, scaleFactor);

    const width = canvas.width / 2 - 4.5 * padding;
    const height = canvas.height / 2;

    const centerX = width / 2 + 2.2 * padding;
    const centerY = height / 2;

    const numRings = 6;
    const numEdges = 8;

    const borderWidths = [0.2, 0.4, 0.6, 0.8, 1, 1.2];

    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const outerRingIndex = numRings - 1;
    const outerRingRadius = (outerRingIndex + 1) * (width / (2 * numRings));
    const labelOffset = 10;

    ctx.beginPath();
    ctx.fillStyle = convertColorLabel(type);
    ctx.font = `bold 8px Epilogue`;
    ctx.textAlign = "center";

    for (let i = 0; i < numEdges; i++) {
      const angle = (2 * Math.PI * i) / numEdges;
      const x = centerX + outerRingRadius * Math.cos(angle);
      const y = centerY + outerRingRadius * Math.sin(angle);

      if (i === 2) {
        ctx.fillText(data[i].label, x, y + 1.5 * labelOffset);
      } else if (i === 6) {
        ctx.fillText(data[i].label, x, y - labelOffset);
      } else if (i === 1) {
        ctx.fillText(
          data[i].label,
          x + 3.5 * labelOffset,
          y + 1.5 * labelOffset
        );
      } else if (i === 3) {
        ctx.fillText(
          data[i].label,
          x - 3.5 * labelOffset,
          y + 1.5 * labelOffset
        );
      } else if (i === 4) {
        ctx.fillText(data[i].label, x - 4 * labelOffset, y + labelOffset / 3);
      } else if (i === 5) {
        ctx.fillText(data[i].label, x - 4 * labelOffset, y);
      } else if (i === 7) {
        ctx.fillText(data[i].label, x + 3.5 * labelOffset, y);
      } else if (i === 0) {
        ctx.fillText(data[i].label, x + 4.9 * labelOffset, y + labelOffset / 3);
      } else {
        ctx.fillText(data[i].label, x, y);
      }
    }

    for (let i = 0; i < numRings; i++) {
      const radius = (i + 1) * (width / (2 * numRings));
      const borderWidth = borderWidths[i];

      ctx.beginPath();

      for (let j = 0; j < numEdges; j++) {
        const angle = (2 * Math.PI * j) / numEdges;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();
      ctx.lineWidth = borderWidth;
      ctx.strokeStyle = convertColorLabel(type);
      ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i < numEdges; i++) {
      const angle = (2 * Math.PI * i) / numEdges;
      const value = data[i % data.length];
      const radius = (value.value / 6) * (width / 2);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.strokeStyle = convertStrokeColor(type);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 12;
    ctx.shadowColor = convertStrokeColor(type);
    for (let i = 0; i < numEdges; i++) {
      const angle = (2 * Math.PI * i) / numEdges;
      const value = data[i % data.length];
      const radius = (value.value / 6) * (width / 2);

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const pointRadius = 3;
      ctx.beginPath();
      ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 12;
      ctx.shadowColor = convertStrokeColor(type);
    }
  }, [data]);

  return (
    <div className={`radar-container ${type}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default RadarChart;
