import React from "react";
import { Stage, Layer, Shape } from "react-konva";

interface BamboProps {
  width: number;
  height: number;
  type: string;
  flex?: number;
}
const Bambo1 = ({ width, height, type, flex }: BamboProps) => {
  const randomNumber1 = Math.floor(Math.random() * (12 - 5 + 1) + 5);
  const randomNumber2 = Math.floor(Math.random() * (12 - 5 + 1) + 5);

  const convertTypeToColorChart = (type: string) => {
    if (type === "kim") {
      return "#EF9E00";
    } else if (type === "moc") {
      return "#078E96";
    } else if (type === "thuy") {
      return "#1B69BF";
    } else if (type === "hoa") {
      return "#D62F6E";
    } else if (type === "tho") {
      return "#C44023";
    } else return "black";
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(0, 0);

            context.quadraticCurveTo(
              width / 2,
              flex !== undefined ? flex : randomNumber1,
              width,
              0
            );

            context.lineTo(width, 0);
            context.lineTo(width - 20, height);

            context.quadraticCurveTo(
              width / 2,
              height - (flex !== undefined ? flex : randomNumber2),
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

export default Bambo1;
