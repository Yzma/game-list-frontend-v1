import { useMutation } from '@apollo/client';

import { ADD_LIKE_TO_LIKEABLE } from './querires';
import { getTokenFromLocalStorage } from '@/constants';
import type { AddLikeToLikeablePayload } from '@/graphql/__generated__/graphql';

const useAddRemoveLike = () => {
  const [addLikeRequest] = useMutation(ADD_LIKE_TO_LIKEABLE);

  const addLike = async (
    likeableId: string,
    likeableType: string
  ): Promise<AddLikeToLikeablePayload> => {
    try {
      const response = await addLikeRequest({
        variables: { likeableId, likeableType },
        context: getTokenFromLocalStorage.context,
      });
      if (
        !response ||
        !response.data ||
        !response.data.addLikeToLikeable ||
        response.data.addLikeToLikeable.errors[0]
      ) {
        throw new Error(response.data.addLikeToLikeable.errors[0]);
      }
      console.log(response.data.addLikeToLikeable);

      return response.data.addLikeToLikeable;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Error adding like');
    }
  };
  return { addLike };
};

export default useAddRemoveLike;