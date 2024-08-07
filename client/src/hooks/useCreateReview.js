import { useMutation } from '@apollo/client';
import { createReviewMutation } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate] = useMutation(createReviewMutation);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const response = await mutate({
      variables: {review: {ownerName, repositoryName, rating, text}}
    });
    return response;
  };
  return [createReview];
};

export default useCreateReview;