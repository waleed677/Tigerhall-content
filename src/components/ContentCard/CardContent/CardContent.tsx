import { IContentCard } from "../../../interfaces/content.interface";
import { CardBody, Stack, Text, Heading } from "@chakra-ui/react";

interface ICardFooter {
  content: IContentCard;
}

const CardContent = ({ content }: ICardFooter) => {
  const categories = content.categories
    .map((category) => category.name.substring("category ".length))
    .join(", ");

  const expert = content.experts?.[0] || "";

  return (
    <>
      <CardBody p={3}>
        <Stack>
          <Text fontSize={12} color="gray.700" textTransform="uppercase">
            {categories}
          </Text>
          <Heading fontSize={"md"} textTransform="capitalize" mt={-1.5}>
            {content.name}
          </Heading>
          <Text fontSize={12} color="gray.800" textTransform="capitalize">
            {`${expert.firstName} ${expert.lastName}`}
          </Text>
          <Text fontSize={12} color="gray.700" textTransform="capitalize">
            {expert.company}
          </Text>
        </Stack>
      </CardBody>
    </>
  );
};

export default CardContent;
