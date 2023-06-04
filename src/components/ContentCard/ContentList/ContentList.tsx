import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ContentItem from "../ContentItem";
import { IContentCard } from "../../../interfaces/content.interface";

interface IContentList {
  contentCards: IContentCard[];
}

const ContentList = ({ contentCards }: IContentList) => {
  return (
    <>
      <Box>
        <Flex
          minWidth="max-content"
          justifyContent="center"
          flexDirection="column"
        >
          {contentCards?.map((item: IContentCard) => (
            <ContentItem key={item.id} content={item} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ContentList;
