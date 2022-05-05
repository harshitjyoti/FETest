import React, { FC } from "react";
import { Block, IconButton } from "vcc-ui";
import { IViewsProps } from "../typings";

interface IDesktopNavProps {
  navigate:  IViewsProps["navigate"];
}

export const DesktopNav: FC<IDesktopNavProps> = ({ navigate }) => {
  return (
    <Block
      extend={{
        float: "right",
        justifyContent: "space-between",
        marginTop: 15,
        display: "flex",
        width: 100,
      }}
    >
      <IconButton
        onClick={() => navigate("back")}
        variant="outline"
        aria-label="back"
        iconName="navigation-chevronback"
      />
      <IconButton
        onClick={() => navigate("forward")}
        variant="outline"
        aria-label="forward"
        iconName="navigation-chevronforward"
      />
    </Block>
  );
};
