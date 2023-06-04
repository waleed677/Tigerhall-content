import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ContentItem from "../ContentItem";

interface Content {
  name: string;
  id: number;
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

interface propsContentList {
  contentCards: Content[];
}

const ContentList = ({ contentCards }: propsContentList) => {
  return (
    <>
      <Box>
        <Flex
          minWidth="max-content"
          justifyContent="center"
          flexDirection="column"
        >
          {contentCards?.map((item: Content) => (
            <ContentItem key={item.id} content={item} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default ContentList;
