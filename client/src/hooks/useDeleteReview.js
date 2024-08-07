import { useMutation  } from '@apollo/client';
import { deleteReviewMutation } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate] = useMutation(deleteReviewMutation);

  const deleteReview = async ({ deleteReviewId }) => {
    const response = await mutate({
      variables: { deleteReviewId }
    });
    return response;
  };
  return [deleteReview];
};
export default useDeleteReview;