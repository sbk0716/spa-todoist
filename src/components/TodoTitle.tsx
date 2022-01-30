import React, { memo } from "react";
import { Heading } from "@chakra-ui/react";

// interface IFontSize {
//   base: string;
//   md: string;
// }

interface ITodoTitleProps {
  title: string;
  as: any;
  fontSize: any;
  mt: string;
}

export const TodoTitle = memo(
  ({ title, as, fontSize, mt }: ITodoTitleProps) => (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  )
);
