import React from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg";

const AriseIllustration = ({ width = 120, height = 120 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 200" fill="none">
      {/* Example Shapes - Replace These with Your Actual SVG Paths */}
      <Rect
        x="40"
        y="50"
        width="120"
        height="80"
        rx="10"
        fill="#fff"
        stroke="#f97316"
        strokeWidth="4"
      />
      <Circle cx="100" cy="90" r="10" fill="#f97316" />
      <Path
        d="M70 130 L130 130"
        stroke="#f97316"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default AriseIllustration;
