import React, { FC } from "react";
import { Block, SelectInput } from "vcc-ui";

interface IFilterProps {
  options: string[];
  onSelect: (option: string) => void;
}
export const Filter: FC<IFilterProps> = ({ options, onSelect }) => {
  const [value, setValue] = React.useState("All");

  return (
    <Block extend={{ margin: 10, fromM: { width:"200px" } , unitlM: { width:"100%"  }}}>
      <SelectInput
        label={'Body'}
        description={"Filter by body type"}
        value={value}
        onChange={({ target: { value } }) => {
          onSelect(value== 'All' ? "": value);
          setValue(value);
        }}
      >
        <option  value={"All"}>
          ALL
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </SelectInput>
    </Block>
  );
};
