import React from "react";

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
  return <div>{content.name}</div>;
};

export default ContentItem;
