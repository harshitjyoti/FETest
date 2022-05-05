import React from "react";
import { Block, Text } from "vcc-ui";
import { LinkGroup } from ".";
import Image from "next/image";
import { ICar } from '../typings'

export const CarCard: React.FC<ICar> = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}) => (
  <>
    <Text subStyle="inline-link" variant="kelly" extend={{ fontWeight: "500" }}>
      {bodyType}
    </Text>
    <Block extend={{ marginBottom: 15 }}>
      <Text subStyle="emphasis" variant="kelly">
        {modelName}&nbsp; 
        <Text subStyle="inline-link" variant="bates" extend={{ fromM: { display: 'inline' }, untilM : { display: 'block' }}}>
          {modelType}
        </Text>
      </Text>
    </Block>
    <Block extend={{untilM : { width: 350, height: 263, display: 'inline-block' }}}><Image src={imageUrl} width="533" height="400" alt={id}/></Block>
    <Block extend={{ textAlign: "center",  marginTop: 25 }}>
      <LinkGroup
        links={[
          { href: `/learn/${id}`, text: "Learn " },
          { href: `/shop/${id}`, text: "Shop " },
        ]}
      />
    </Block>
  </>
);
