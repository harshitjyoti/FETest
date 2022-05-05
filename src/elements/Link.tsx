import React, { FC } from "react";
import { Link, Inline } from "vcc-ui";

interface ILinkProps {
  href: string;
  text: string;
}

interface ILinkgroupProps {
  links: ILinkProps[];
}
export const LinkGroup: FC<ILinkgroupProps> = ({ links }) => (
  <Inline extend={{ textAlign: "center" }}>
    {links.map(({ href, text }) => (
      <Link className="links" key={href} href={href} arrow="right">
        {text}
      </Link>
    ))}
  </Inline>
);
