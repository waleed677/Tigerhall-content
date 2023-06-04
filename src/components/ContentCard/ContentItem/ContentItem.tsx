import { Card } from "@chakra-ui/react";
import React from "react";
import CardImage from "../CardImage";

interface Content {
  name: string;
  image: {
    uri: string;
  };
  categories: {
    name: string;
  }[];
  experts: {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
  }[];
}

interface propsContentItem {
  content: Content;
}

const ContentItem = ({ content }: propsContentItem) => {
  return (
    <>
      <Card
        maxW="sm"
        borderRadius="8px"
        height="272px"
        mx="auto"
        width="100%"
        mb={6}
      >
        <CardImage imageURL={content.image.uri} />
      </Card>
    </>
  );
};

export default ContentItem;
