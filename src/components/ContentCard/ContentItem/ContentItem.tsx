import { Card, CardFooter, ButtonGroup, Img, Flex } from "@chakra-ui/react";
import CardHeader from "../CardHeader";
import { IContentCard } from "../../../interfaces/content.interface";
import CardContent from "../CardContent/CardContent";
import Bookmark from "../../../assets/images/bookmark.svg";
import Share from "../../../assets/images/share.svg";

interface IContentItem {
  content: IContentCard;
}

const ContentItem = ({ content }: IContentItem) => {
  return (
    <article>
      <Card
        maxW="sm"
        borderRadius="8px"
        height="272px"
        mx="auto"
        width="100%"
        mb={6}
      >
        <CardHeader imageURL={content} />
        <CardContent content={content} />
        <CardFooter>
          <Flex gap="4" ml="auto">
            <Img src={Share} />
            <Img src={Bookmark} />
          </Flex>
        </CardFooter>
      </Card>
    </article>
  );
};

export default ContentItem;
