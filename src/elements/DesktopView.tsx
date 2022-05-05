import React from "react";
import { Block, Flex, Inline } from "vcc-ui";
import { CarCard } from ".";
import { IViewsProps } from "../typings";
import { DesktopNav } from "./DesktopNav";

export const DesktopView: React.FC<IViewsProps> = ({
  slides,
  navigate,
  index,
}) => (
  <Block>
    <Flex
      extend={{
        flexDirection: "row",
        gap: 15,
      }}
    >
      {slides.slice(index, index + 4).map((car) => (
        <Inline key={car.id} extend={{ margin: 5, width: "25%" }}>
          <CarCard {...car} />{" "}
        </Inline>
      ))}
    </Flex>
    { slides.length > 4 && <DesktopNav navigate={navigate} />}
  </Block>
);
