/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  Scalar: any;
};

/** Autogenerated input type of AddUserGames */
export type AddUserGamesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  gameId: Scalars['ID'];
};

/** Autogenerated return type of AddUserGames. */
export type AddUserGamesPayload = {
  __typename?: 'AddUserGamesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  userGame?: Maybe<UserGame>;
};

/** Autogenerated input type of DeleteUserGames */
export type DeleteUserGamesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  gameId: Scalars['ID'];
};

/** Autogenerated return type of DeleteUserGames. */
export type DeleteUserGamesPayload = {
  __typename?: 'DeleteUserGamesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  userGame?: Maybe<UserGame>;
};

/** Autogenerated input type of EditUserGames */
export type EditUserGamesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  completedDate?: InputMaybe<Scalars['ISO8601DateTime']>;
  gameId: Scalars['ID'];
  gameNote?: InputMaybe<Scalars['String']>;
  gameStatus?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated return type of EditUserGames. */
export type EditUserGamesPayload = {
  __typename?: 'EditUserGamesPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  userGame?: Maybe<UserGame>;
};

/** Attributes for querying by an ID or name */
export type EntityIdNameAttributes = {
  /** ID of the Entity */
  ID?: InputMaybe<Scalars['Int']>;
  /** Name of the Entity */
  name?: InputMaybe<Scalars['String']>;
};

export type Game = {
  __typename?: 'Game';
  avgScore?: Maybe<Scalars['Float']>;
  bannerURL?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  imageURL?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  platforms: Array<Scalars['String']>;
  releaseDate: Scalars['ISO8601DateTime'];
  tags: Array<Scalars['String']>;
  totalRating?: Maybe<Scalars['Int']>;
};

export type GenrePlatformTag = {
  __typename?: 'GenrePlatformTag';
  errors: Array<Scalars['String']>;
  genres: Array<Scalars['String']>;
  platforms: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
};

/** Autogenerated input type of LoginUser */
export type LoginUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Autogenerated return type of LoginUser. */
export type LoginUserPayload = {
  __typename?: 'LoginUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a game to user's list according to user_id and game_id */
  addUserGames?: Maybe<AddUserGamesPayload>;
  deleteUserGames?: Maybe<DeleteUserGamesPayload>;
  editUserGames?: Maybe<EditUserGamesPayload>;
  login?: Maybe<LoginUserPayload>;
  register?: Maybe<RegisterUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddUserGamesArgs = {
  input: AddUserGamesInput;
};


export type MutationDeleteUserGamesArgs = {
  input: DeleteUserGamesInput;
};


export type MutationEditUserGamesArgs = {
  input: EditUserGamesInput;
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};


export type MutationRegisterArgs = {
  input: RegisterUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get all games */
  allGames: Array<Game>;
  /** Get games by status for a user */
  gamesByStatusForAUser: UserGamesByStatus;
  /** Get a list of games for a user */
  gamesForAUser: Array<Game>;
  /** Get all games by genre */
  getAllGamesByGenre: Array<Game>;
  /** Get all games by platform */
  getAllGamesByPlatform: Array<Game>;
  /** Get all games by tag */
  getAllGamesByTag: Array<Game>;
  /** Get all users */
  getAllUsers: Array<User>;
  /** Get all genres, platforms, and tags */
  getGenresPlatformsTags: GenrePlatformTag;
  /** Get user by id */
  getUserById: User;
};


export type QueryAllGamesArgs = {
  genre?: InputMaybe<Array<Scalars['String']>>;
  platform?: InputMaybe<Array<Scalars['String']>>;
  tag?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetAllGamesByGenreArgs = {
  genre?: InputMaybe<EntityIdNameAttributes>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllGamesByPlatformArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  platform?: InputMaybe<EntityIdNameAttributes>;
};


export type QueryGetAllGamesByTagArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<EntityIdNameAttributes>;
};

/** Autogenerated input type of RegisterUser */
export type RegisterUserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Autogenerated return type of RegisterUser. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  action: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  payload: Scalars['Scalar'];
};

/** Autogenerated return type of UpdateUser. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  bannerPicture?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  games: Array<Game>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  userGames: Array<UserGame>;
  userPicture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserGame = {
  __typename?: 'UserGame';
  completedDate: Scalars['ISO8601DateTime'];
  createdAt: Scalars['ISO8601DateTime'];
  game: Game;
  gameNote: Scalars['String'];
  gameStatus: Scalars['String'];
  id: Scalars['ID'];
  private: Scalars['Boolean'];
  rating: Scalars['Float'];
  review: Scalars['String'];
  startDate: Scalars['ISO8601DateTime'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type UserGamesByStatus = {
  __typename?: 'UserGamesByStatus';
  completed?: Maybe<Array<Game>>;
  completedCount?: Maybe<Scalars['Int']>;
  dropped?: Maybe<Array<Game>>;
  droppedCount?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<Scalars['String']>>;
  listsOrder?: Maybe<Scalars['String']>;
  paused?: Maybe<Array<Game>>;
  pausedCount?: Maybe<Scalars['Int']>;
  planning?: Maybe<Array<Game>>;
  planningCount?: Maybe<Scalars['Int']>;
  playing?: Maybe<Array<Game>>;
  playingCount?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginUserPayload', token?: string | null, errors: Array<string>, user?: { __typename?: 'User', username?: string | null } | null } | null };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterUserPayload', token?: string | null, errors: Array<string>, user?: { __typename?: 'User', username?: string | null } | null } | null };

export type GetAllGamesByGenreQueryVariables = Exact<{
  genre: EntityIdNameAttributes;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllGamesByGenreQuery = { __typename?: 'Query', getAllGamesByGenre: Array<{ __typename?: 'Game', name: string }> };

export type GetAllGamesByPlatformQueryVariables = Exact<{
  platform: EntityIdNameAttributes;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllGamesByPlatformQuery = { __typename?: 'Query', getAllGamesByPlatform: Array<{ __typename?: 'Game', name: string }> };

export type GetAllGamesByTagQueryVariables = Exact<{
  tag: EntityIdNameAttributes;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllGamesByTagQuery = { __typename?: 'Query', getAllGamesByTag: Array<{ __typename?: 'Game', name: string }> };

export type GetGenresPlatformsTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresPlatformsTagsQuery = { __typename?: 'Query', getGenresPlatformsTags: { __typename?: 'GenrePlatformTag', genres: Array<string>, platforms: Array<string>, tags: Array<string>, errors: Array<string> } };

export type GetAllGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGamesQuery = { __typename?: 'Query', allGames: Array<{ __typename?: 'Game', id: string, name: string, description: string, bannerURL?: string | null, imageURL?: string | null, releaseDate: any, avgScore?: number | null, totalRating?: number | null, genres: Array<string>, tags: Array<string>, platforms: Array<string> }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', username?: string | null, bannerPicture?: string | null, userPicture?: string | null } };

export type DeleteUserGamesMutationVariables = Exact<{
  gameId: Scalars['ID'];
}>;


export type DeleteUserGamesMutation = { __typename?: 'Mutation', deleteUserGames?: { __typename?: 'DeleteUserGamesPayload', errors?: Array<string> | null, userGame?: { __typename?: 'UserGame', id: string, game: { __typename?: 'Game', id: string, name: string, description: string, imageURL?: string | null, bannerURL?: string | null, releaseDate: any, avgScore?: number | null, genres: Array<string>, platforms: Array<string>, tags: Array<string> } } | null } | null };

export type AddUserGamesMutationVariables = Exact<{
  gameId: Scalars['ID'];
}>;


export type AddUserGamesMutation = { __typename?: 'Mutation', addUserGames?: { __typename?: 'AddUserGamesPayload', errors?: Array<string> | null, userGame?: { __typename?: 'UserGame', id: string, game: { __typename?: 'Game', id: string, name: string, description: string, imageURL?: string | null, bannerURL?: string | null, releaseDate: any, avgScore?: number | null, genres: Array<string>, platforms: Array<string>, tags: Array<string> } } | null } | null };

export type GamesForAUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesForAUserQuery = { __typename?: 'Query', gamesForAUser: Array<{ __typename?: 'Game', id: string, name: string, description: string, imageURL?: string | null, bannerURL?: string | null, releaseDate: any, avgScore?: number | null, genres: Array<string>, platforms: Array<string>, tags: Array<string> }> };

export type GamesByTagsForAUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesByTagsForAUserQuery = { __typename?: 'Query', gamesByStatusForAUser: { __typename?: 'UserGamesByStatus', playingCount?: number | null, planningCount?: number | null, completedCount?: number | null, pausedCount?: number | null, droppedCount?: number | null, totalCount?: number | null, listsOrder?: string | null, errors?: Array<string> | null, playing?: Array<{ __typename?: 'Game', id: string, name: string, imageURL?: string | null, avgScore?: number | null, platforms: Array<string> }> | null, planning?: Array<{ __typename?: 'Game', id: string, name: string, imageURL?: string | null, avgScore?: number | null, platforms: Array<string> }> | null, completed?: Array<{ __typename?: 'Game', id: string, name: string, imageURL?: string | null, avgScore?: number | null, platforms: Array<string> }> | null, paused?: Array<{ __typename?: 'Game', id: string, name: string, imageURL?: string | null, avgScore?: number | null, platforms: Array<string> }> | null, dropped?: Array<{ __typename?: 'Game', id: string, name: string, imageURL?: string | null, avgScore?: number | null, platforms: Array<string> }> | null } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const GetAllGamesByGenreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGamesByGenre"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"genre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EntityIdNameAttributes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllGamesByGenre"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"genre"},"value":{"kind":"Variable","name":{"kind":"Name","value":"genre"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllGamesByGenreQuery, GetAllGamesByGenreQueryVariables>;
export const GetAllGamesByPlatformDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGamesByPlatform"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EntityIdNameAttributes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllGamesByPlatform"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllGamesByPlatformQuery, GetAllGamesByPlatformQueryVariables>;
export const GetAllGamesByTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGamesByTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EntityIdNameAttributes"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllGamesByTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllGamesByTagQuery, GetAllGamesByTagQueryVariables>;
export const GetGenresPlatformsTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGenresPlatformsTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGenresPlatformsTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<GetGenresPlatformsTagsQuery, GetGenresPlatformsTagsQueryVariables>;
export const GetAllGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"bannerURL"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"totalRating"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}}]}}]}}]} as unknown as DocumentNode<GetAllGamesQuery, GetAllGamesQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"bannerPicture"}},{"kind":"Field","name":{"kind":"Name","value":"userPicture"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const DeleteUserGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserGames"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userGame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"bannerURL"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<DeleteUserGamesMutation, DeleteUserGamesMutationVariables>;
export const AddUserGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserGames"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userGame"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"bannerURL"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<AddUserGamesMutation, AddUserGamesMutationVariables>;
export const GamesForAUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GamesForAUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamesForAUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"bannerURL"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"genres"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}}]}}]}}]} as unknown as DocumentNode<GamesForAUserQuery, GamesForAUserQueryVariables>;
export const GamesByTagsForAUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GamesByTagsForAUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gamesByStatusForAUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"planning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paused"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dropped"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"avgScore"}},{"kind":"Field","name":{"kind":"Name","value":"platforms"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playingCount"}},{"kind":"Field","name":{"kind":"Name","value":"planningCount"}},{"kind":"Field","name":{"kind":"Name","value":"completedCount"}},{"kind":"Field","name":{"kind":"Name","value":"pausedCount"}},{"kind":"Field","name":{"kind":"Name","value":"droppedCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"listsOrder"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}}]}}]}}]} as unknown as DocumentNode<GamesByTagsForAUserQuery, GamesByTagsForAUserQueryVariables>;