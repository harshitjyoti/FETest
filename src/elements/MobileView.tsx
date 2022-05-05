import React from "react";
import { Inline } from "vcc-ui";
import { CarCard, MobileNav } from ".";
import { IViewsProps } from "../typings";

export const MobileView: React.FC<IViewsProps> = ({
  slides,
  navigate,
  index
}) => (
  <>
    <Inline
      extend={{
        display: "inline-block",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      {slides.slice(index, index+2).map((car) => (
        <div
          key={car.id}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginLeft: 15,
          }}
        >
          <CarCard {...car} />
        </div>
      ))}
    </Inline>
    <MobileNav
      count={slides.length}
      handleChange={(index) => navigate("", index)}
    />
  </>
);
