import React, { memo } from "react";
import { Heading } from "@chakra-ui/react";

type Props = {
  title: any;
  as: any;
  fontSize: any;
  mt?: any;
};

export const TodoTitle = memo(({ title, as, fontSize, mt }: Props) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
});
