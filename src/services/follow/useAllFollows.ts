import {
  useLazyQuery,
  OperationVariables,
  ApolloQueryResult,
  QueryResult,
} from '@apollo/client';
import { GET_ALL_FOLLOWS } from '@/services/follow/queries';
import { getTokenFromLocalStorage } from '@/constants';
import {
  Follow as FollowType,
  GetAllFollowsQuery,
} from '@/graphql/__generated__/graphql';

type UseAllFollowsType = {
  follows: FollowType[];
  loading: boolean;
  getAllFollows: () => Promise<
    QueryResult<GetAllFollowsQuery, OperationVariables>
  >;
  refetch: () => Promise<ApolloQueryResult<{ getAllFollows: FollowType[] }>>;
};

const useAllFollows = (): UseAllFollowsType => {
  const [getAllFollows, { data, loading, refetch }] = useLazyQuery(
    GET_ALL_FOLLOWS,
    {
      context: getTokenFromLocalStorage.context,
    }
  );

  try {
    if (!data || !data.getAllFollows) {
      throw new Error('Error getting follows');
    }

    const follows = data.getAllFollows;

    return {
      getAllFollows,
      follows,
      loading,
      refetch,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      const follows = data ? (data.getAllFollows as FollowType[]) : [];

      return {
        getAllFollows,
        follows,
        loading,
        refetch,
      };
    }

    data.getAllFollows.errors = ['Unknown error'];

    return {
      getAllFollows,
      follows: data.getAllFollows as FollowType[],
      loading,
      refetch,
    };
  }
};

export default useAllFollows;
