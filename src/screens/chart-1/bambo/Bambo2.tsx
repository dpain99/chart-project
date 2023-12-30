import React from "react";
import { Stage, Layer, Shape } from "react-konva";

interface Bambo2Props {
  width: number;
  height: number;
  type: string;
}
const Bambo2 = ({ width, height, type }: Bambo2Props) => {
  const randomNumber1 = Math.floor(Math.random() * (12 - 5 + 1) + 5);
  const randomNumber2 = Math.floor(Math.random() * (12 - 5 + 1) + 5);

  const convertTypeToColorChart = (type: string) => {
    if (type === "kim") {
      return "#F0E1BC";
    } else if (type === "moc") {
      return "#D5EAE2";
    } else if (type === "thuy") {
      return "#D9E5EB";
    } else if (type === "hoa") {
      return "#FFDBE8";
    } else if (type === "tho") {
      return "#FFE6CF";
    } else return "black";
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(20, 0);

            context.quadraticCurveTo(width / 2, randomNumber1, width, 0);

            context.lineTo(width, 0);
            context.lineTo(width, height);

            context.quadraticCurveTo(
              width / 2,
              height - randomNumber2,
              0,
              height
            );

            context.lineTo(0, height);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill={convertTypeToColorChart(type)}
          stroke={convertTypeToColorChart(type)}
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

export default Bambo2;
