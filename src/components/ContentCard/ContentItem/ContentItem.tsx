import { Card } from "@chakra-ui/react";
import React from "react";
import CardImage from "../CardImage";
import { IContentCard } from "../../../interfaces/content.interface";
import { IContentCardData } from "../../../interfaces/content.interface";

interface IContentItem {
  content: IContentCard;
}

const ContentItem = ({ content }: IContentItem) => {
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
        <CardImage imageURL={content} />
      </Card>
    </>
  );
};

export default ContentItem;
