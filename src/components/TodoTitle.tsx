import { memo } from "react";
import { Heading } from "@chakra-ui/react";

// interface IFontSize {
//   base: string;
//   md: string;
// }

interface ITodoTitleProps {
  title: string;
  as: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  fontSize: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  mt: string;
}
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const TodoTitle = memo(
  ({ title, as, fontSize, mt }: ITodoTitleProps) => (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  )
);
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
