import { Flex, Img, Text } from "@chakra-ui/react";
import Clock from "../../../assets/images/clock.svg";

interface IContentPublishedTime {
  publishedAt: Date;
}

const ContentPublishedTime = ({ publishedAt }: IContentPublishedTime) => {
  const currentTime = new Date();
  const timeElapsed = Math.floor(
    (currentTime.getTime() - new Date(publishedAt.toString()).getTime()) /
      (1000 * 60)
  );
  let formattedTime: string;

  if (timeElapsed < 60) {
    formattedTime = `${timeElapsed}m`;
  } else if (timeElapsed < 1440) {
    const hours = Math.floor(timeElapsed / 60);
    formattedTime = `${hours}h`;
  } else {
    const days = Math.floor(timeElapsed / 1440);
    formattedTime = `${days}d`;
  }
  return (
    <Flex
      position="absolute"
      bottom={0}
      right={0}
      m="0 8px 8px 0"
      p="5px 12px"
      color="white"
      bg="rgba(0, 0, 0, 0.7)"
      borderRadius="3xl"
      gap={1.5}
    >
      <Img src={Clock} mt={1} w={3} h={3} />
      <Text fontSize={12} mx="auto" color="white" fontWeight="700">
        {formattedTime}
      </Text>
    </Flex>
  );
};

export default ContentPublishedTime;
