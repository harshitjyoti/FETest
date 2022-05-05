import React, { FC } from "react";

import {
  DesktopView,
  MobileView,
} from "../elements";

import { IViewsProps } from "../typings";

interface ISlideProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

interface ISliderProps {
  slides: ISlideProps[];
  navigate: IViewsProps["navigate"];
  isMobile: boolean;
  index: number
}

export const Slider: FC<ISliderProps> = ({ slides, navigate, isMobile, index }) => {

  return !isMobile ? (
    <DesktopView slides={slides} navigate={navigate} index={index}/>
  ) : (
    <MobileView slides={slides} navigate={navigate} index={index}/>
  );
};
