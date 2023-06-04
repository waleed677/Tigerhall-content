import { gql } from "@apollo/client";

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($keyword: String) {
    contentCards(filter: { limit: 20, keywords: $keyword, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          id
          name
          length
          timeSpentOnByUsers
          publishedAt
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;
