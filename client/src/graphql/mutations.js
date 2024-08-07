import { gql } from '@apollo/client';

export const Authenticate = gql`
  mutation signIn($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const createReviewMutation = gql`
  mutation($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
      rating
      text
    }
  }
`;

export const createUserMutation = gql`
  mutation($user: CreateUserInput!) {
    createUser(user: $user) {
      username
      id
    }
  }
`;