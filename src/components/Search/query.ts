export const GET_CONTENT_CARDS = `
  query GetContentCards($searchTerm: String!) {
    contentCards(
      filter: { limit: 20, keywords: $searchTerm, types: ["PODCAST"] }
    ) {
      edges {
        ... on Podcast {
          name
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
