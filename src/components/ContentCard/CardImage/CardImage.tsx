import { Box, Icon, Text } from "@chakra-ui/react";

import Graph from "../../../../public/assets/images/graph.svg";
import ContentPublishedTime from "../ContentPublishedTime";
import { IContentCardData } from "../../../interfaces/content.interface";

interface ICardImage {
  imageURL: IContentCardData;
}

const CardImage = ({ imageURL }: ICardImage) => {
  const url = new URL(imageURL.image.uri);
  const imageTextInject = "resize/250x";
  const { host, pathname } = url;

  return (
    <>
      <Box
        height="120px"
        backgroundImage={`https://${host}/${imageTextInject}${pathname}`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        borderTopLeftRadius="8px"
        borderTopRightRadius="8px"
        position="relative"
      >
        <Box
          bg="orange.50"
          width="auto"
          top="0"
          left="0"
          zIndex={9}
          position="absolute"
          padding="8px"
          borderTopLeftRadius="8px"
        >
          <Box display="flex">
            <img src={Graph} />
            <Text fontSize="12px" fontWeight="700" color="gray.900" ml="4px">
              30% Completed
            </Text>
          </Box>
        </Box>
        <Box
          zIndex={9}
          position="absolute"
          bottom="8px"
          left="8px"
          height="24px"
          width="24px"
          borderRadius="3xl"
          bg="orange.600"
          textAlign="center"
        ></Box>
        <ContentPublishedTime publishedAt={imageURL.publishedAt} />
        {/* <Box
          zIndex={9}
          position="absolute"
          bottom="8px"
          right="8px"
          height="24px"
          borderRadius={12}
          bg="rgba(0, 0, 0, 0.7)"
          textAlign="center"
          padding="0 10px"
          color="#000000"
        >
          <img src={Graph} />
          
        </Box> */}
        <Box
          width="30%"
          height="2px"
          bg="orange.600"
          position="absolute"
          bottom="-2px"
          zIndex={3}
        />
        <Box
          width="100%"
          height="2px"
          bg="gray.400"
          position="absolute"
          bottom="-2px"
          left="0"
          zIndex={1}
        />
      </Box>
    </>
  );
};

export default CardImage;
