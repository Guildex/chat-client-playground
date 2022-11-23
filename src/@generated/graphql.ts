import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  channel?: Maybe<Channel>;
  /** ログイン中のユーザーのチャンネル一覧を取得 */
  channels: Array<Channel>;
  searchProfiles: ProfileDetailsConnection;
  /** ユーザー情報を取得 */
  user?: Maybe<UserOutput>;
  /** ログイン中のユーザーを取得 */
  viewer: User;
};


export type QueryChannelArgs = {
  uuid: Scalars['String'];
};


export type QuerySearchProfilesArgs = {
  connectionArgs: ConnectionArguments;
  filterArgs?: InputMaybe<ProfileDetailsFilterArgs>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Channel = {
  __typename?: 'Channel';
  _count: ChannelCount;
  id: Scalars['ID'];
  messages?: Maybe<Array<Message>>;
  /** チャンネル名 */
  name: Scalars['String'];
  users?: Maybe<Array<UserOnChannel>>;
  /** チャンネルを識別するユニークID */
  uuid: Scalars['String'];
};

export type ChannelCount = {
  __typename?: 'ChannelCount';
  messages: Scalars['Int'];
  users: Scalars['Int'];
};

export type Message = {
  __typename?: 'Message';
  channel?: Maybe<Channel>;
  channelId: Scalars['Int'];
  content: MessageContent;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messageContentId: Scalars['Int'];
  sender?: Maybe<User>;
  senderId: Scalars['Int'];
};

export type MessageContent = {
  __typename?: 'MessageContent';
  /** メッセージ本文 */
  body: Scalars['String'];
  id: Scalars['ID'];
  message?: Maybe<Message>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** メールアドレス */
  email: Scalars['String'];
  /** Facebook ID */
  fbId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** LINE ID */
  lineId?: Maybe<Scalars['String']>;
  message?: Maybe<Array<Message>>;
  profile?: Maybe<Profile>;
  /** ユーザーの状態 */
  status: UserStatus;
  updatedAt: Scalars['DateTime'];
  userOnChannels?: Maybe<Array<UserOnChannel>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  message: Scalars['Int'];
  userOnChannels: Scalars['Int'];
};

export type Profile = {
  __typename?: 'Profile';
  _count: ProfileCount;
  avatarUrls?: Maybe<Array<AvatarUrl>>;
  /** 年齢 */
  birthday: Scalars['DateTime'];
  /** 市区町村のコード */
  cityCode?: Maybe<Scalars['Int']>;
  detail?: Maybe<ProfileDetail>;
  id: Scalars['ID'];
  /** 最後にログインした時間 */
  lastLoggedInAt?: Maybe<Scalars['DateTime']>;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** 都道府県のコード */
  prefectureCode: Scalars['Int'];
  /** 自己紹介 */
  selfIntroduction?: Maybe<Scalars['String']>;
  user: User;
  /** User.id */
  userId: Scalars['Int'];
};

export type ProfileCount = {
  __typename?: 'ProfileCount';
  avatarUrls: Scalars['Int'];
};

export type AvatarUrl = {
  __typename?: 'AvatarUrl';
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
  /** Profile.id */
  profileId: Scalars['Int'];
  /** プロフィール画像のURL */
  url: Scalars['String'];
};

/** 検索条件で利用するプロフィールの詳細情報 */
export type ProfileDetail = {
  __typename?: 'ProfileDetail';
  /** 年収 */
  annualIncome?: Maybe<AnnualIncome>;
  /** 飲酒 */
  drinking?: Maybe<Drinking>;
  /** 学歴 */
  education?: Maybe<Education>;
  /** 体型 */
  figure?: Maybe<Figure>;
  /** 身長 */
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** 結婚状況 */
  maritalStatus?: Maybe<MaritalStatus>;
  /** 職業 */
  occupation?: Maybe<Occupation>;
  profile?: Maybe<Profile>;
  /** Profile.id */
  profileId: Scalars['Int'];
  /** 喫煙 */
  smoking?: Maybe<Smoking>;
};

/** 年収 */
export enum AnnualIncome {
  BetweenEightMillionAndTenMillion = 'BETWEEN_EIGHT_MILLION_AND_TEN_MILLION',
  BetweenFifteenMillionAndTwentyMillion = 'BETWEEN_FIFTEEN_MILLION_AND_TWENTY_MILLION',
  BetweenFourMillionAndSixMillion = 'BETWEEN_FOUR_MILLION_AND_SIX_MILLION',
  BetweenSixMillionAndEightMillion = 'BETWEEN_SIX_MILLION_AND_EIGHT_MILLION',
  BetweenTenMillionAndFifteenMillion = 'BETWEEN_TEN_MILLION_AND_FIFTEEN_MILLION',
  BetweenThreeMillionAndFourMillion = 'BETWEEN_THREE_MILLION_AND_FOUR_MILLION',
  OverTwentyMillion = 'OVER_TWENTY_MILLION',
  UnderThreeMillion = 'UNDER_THREE_MILLION'
}

/** 飲酒 */
export enum Drinking {
  DontDrink = 'DONT_DRINK',
  Drink = 'DRINK',
  Sometimes = 'SOMETIMES'
}

/** 学歴 */
export enum Education {
  HighScoolGraduate = 'HIGH_SCOOL_GRADUATE',
  JuniorCollegeGraduate = 'JUNIOR_COLLEGE_GRADUATE',
  MastersGraduate = 'MASTERS_GRADUATE',
  Other = 'OTHER',
  UniversityGraduate = 'UNIVERSITY_GRADUATE'
}

/** 体型 */
export enum Figure {
  Fat = 'FAT',
  Muscular = 'MUSCULAR',
  Plump = 'PLUMP',
  Slim = 'SLIM'
}

/** 結婚状況 */
export enum MaritalStatus {
  Bereavement = 'BEREAVEMENT',
  Divorce = 'DIVORCE',
  Single = 'SINGLE'
}

/** 職業 */
export enum Occupation {
  Accountant = 'ACCOUNTANT',
  Beautician = 'BEAUTICIAN',
  Designer = 'DESIGNER',
  Director = 'DIRECTOR',
  Engineer = 'ENGINEER',
  Executive = 'EXECUTIVE',
  Freelance = 'FREELANCE',
  Other = 'OTHER',
  Student = 'STUDENT'
}

/** 喫煙 */
export enum Smoking {
  DoNot = 'DO_NOT',
  ECigarette = 'E_CIGARETTE',
  NoSmorking = 'NO_SMORKING',
  Smorking = 'SMORKING',
  Sometimes = 'SOMETIMES',
  Stop = 'STOP'
}

/** ユーザーの状態 */
export enum UserStatus {
  Available = 'AVAILABLE',
  Frozen = 'FROZEN',
  LoggedInByExternal = 'LOGGED_IN_BY_EXTERNAL',
  Unauthenticated = 'UNAUTHENTICATED',
  Verified = 'VERIFIED'
}

export type UserOnChannel = {
  __typename?: 'UserOnChannel';
  channel: Channel;
  channelId: Scalars['Int'];
  joinedAt: Scalars['DateTime'];
  joinedBy: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type ConnectionArguments = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProfileDetailsFilterArgs = {
  annualIncome?: InputMaybe<AnnualIncome>;
  drinking?: InputMaybe<Drinking>;
  education?: InputMaybe<Education>;
  figure?: InputMaybe<Figure>;
  height?: InputMaybe<RangeFilter>;
  maritalStatus?: InputMaybe<MaritalStatus>;
  occupation?: InputMaybe<Occupation>;
  smoking?: InputMaybe<Smoking>;
};

export type RangeFilter = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export type ProfileDetailsConnection = {
  __typename?: 'ProfileDetailsConnection';
  edges: Array<Edge>;
  nodes: Array<ProfileDetail>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Edge = {
  __typename?: 'Edge';
  cursor: Scalars['String'];
  node: ProfileDetail;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserOutput = {
  __typename?: 'UserOutput';
  _count: UserCount;
  /** 年齢 */
  age: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  /** メールアドレス */
  email: Scalars['String'];
  /** Facebook ID */
  fbId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** LINE ID */
  lineId?: Maybe<Scalars['String']>;
  message?: Maybe<Array<Message>>;
  profile?: Maybe<Profile>;
  /** ユーザーの状態 */
  status: UserStatus;
  updatedAt: Scalars['DateTime'];
  userOnChannels?: Maybe<Array<UserOnChannel>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** チャンネルを作成 */
  createChannel: Channel;
  /** ユーザー登録 */
  registerUser: AuthenticateOutput;
  sendMessage: Message;
  /** ユーザ情報を更新 */
  updateUser: User;
};


export type MutationCreateChannelArgs = {
  name: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  input: UpdateUserInput;
};


export type MutationSendMessageArgs = {
  body: Scalars['String'];
  channelUuid: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** ユーザー情報更新時に渡す値 */
export type UpdateUserInput = {
  /** 年収 */
  annualIncome?: InputMaybe<Scalars['String']>;
  /** 市区町村コード */
  cityCode?: InputMaybe<Scalars['Int']>;
  /** 飲酒 */
  drinking?: InputMaybe<Scalars['String']>;
  /** 学歴 */
  education?: InputMaybe<Scalars['String']>;
  /** メールアドレス */
  email?: InputMaybe<Scalars['String']>;
  /** 体型 */
  figure?: InputMaybe<Scalars['String']>;
  /** 身長 */
  height?: InputMaybe<Scalars['Int']>;
  /** 結婚状況 */
  maritalStatus?: InputMaybe<Scalars['String']>;
  /** ニックネーム */
  nickname?: InputMaybe<Scalars['String']>;
  /** 職業 */
  occupation?: InputMaybe<Scalars['String']>;
  /** 都道府県コード */
  prefectureCode?: InputMaybe<Scalars['Int']>;
  /** 喫煙 */
  smoking?: InputMaybe<Scalars['String']>;
  /** ユーザーの状態 */
  status?: InputMaybe<Scalars['String']>;
};

export type AuthenticateOutput = {
  __typename?: 'AuthenticateOutput';
  accessToken: Scalars['String'];
  user: User;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageSent: Message;
};

export type GetViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetViewerQuery = { __typename?: 'Query', viewer: { __typename?: 'User', id: string, profile?: { __typename?: 'Profile', nickname: string, avatarUrls?: Array<{ __typename?: 'AvatarUrl', url: string }> | null } | null } };

export type GetChannelQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetChannelQuery = { __typename?: 'Query', channel?: { __typename?: 'Channel', id: string, uuid: string, messages?: Array<{ __typename?: 'Message', id: string, createdAt: any, sender?: { __typename?: 'User', id: string, profile?: { __typename?: 'Profile', nickname: string, avatarUrls?: Array<{ __typename?: 'AvatarUrl', url: string }> | null } | null } | null, content: { __typename?: 'MessageContent', body: string } }> | null } | null };

export type SendMessageMutationVariables = Exact<{
  channelUuid: Scalars['String'];
  body: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string } };

export type MessageSentSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageSentSubscription = { __typename?: 'Subscription', messageSent: { __typename?: 'Message', id: string, createdAt: any, sender?: { __typename?: 'User', id: string, profile?: { __typename?: 'Profile', nickname: string, avatarUrls?: Array<{ __typename?: 'AvatarUrl', url: string }> | null } | null } | null, content: { __typename?: 'MessageContent', body: string } } };

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename?: 'Channel', id: string, uuid: string, name: string, users?: Array<{ __typename?: 'UserOnChannel', user: { __typename?: 'User', profile?: { __typename?: 'Profile', avatarUrls?: Array<{ __typename?: 'AvatarUrl', url: string }> | null } | null } }> | null }> };

export type CreateChannelMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'Channel', id: string } };


export const GetViewerDocument = gql`
    query GetViewer {
  viewer {
    id
    profile {
      nickname
      avatarUrls {
        url
      }
    }
  }
}
    `;

/**
 * __useGetViewerQuery__
 *
 * To run a query within a React component, call `useGetViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerQuery(baseOptions?: Apollo.QueryHookOptions<GetViewerQuery, GetViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewerQuery, GetViewerQueryVariables>(GetViewerDocument, options);
      }
export function useGetViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewerQuery, GetViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewerQuery, GetViewerQueryVariables>(GetViewerDocument, options);
        }
export type GetViewerQueryHookResult = ReturnType<typeof useGetViewerQuery>;
export type GetViewerLazyQueryHookResult = ReturnType<typeof useGetViewerLazyQuery>;
export type GetViewerQueryResult = Apollo.QueryResult<GetViewerQuery, GetViewerQueryVariables>;
export const GetChannelDocument = gql`
    query GetChannel($uuid: String!) {
  channel(uuid: $uuid) {
    id
    uuid
    messages {
      id
      createdAt
      sender {
        id
        profile {
          avatarUrls {
            url
          }
          nickname
        }
      }
      content {
        body
      }
    }
  }
}
    `;

/**
 * __useGetChannelQuery__
 *
 * To run a query within a React component, call `useGetChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetChannelQuery(baseOptions: Apollo.QueryHookOptions<GetChannelQuery, GetChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelQuery, GetChannelQueryVariables>(GetChannelDocument, options);
      }
export function useGetChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelQuery, GetChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelQuery, GetChannelQueryVariables>(GetChannelDocument, options);
        }
export type GetChannelQueryHookResult = ReturnType<typeof useGetChannelQuery>;
export type GetChannelLazyQueryHookResult = ReturnType<typeof useGetChannelLazyQuery>;
export type GetChannelQueryResult = Apollo.QueryResult<GetChannelQuery, GetChannelQueryVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($channelUuid: String!, $body: String!) {
  sendMessage(channelUuid: $channelUuid, body: $body) {
    id
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      channelUuid: // value for 'channelUuid'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const MessageSentDocument = gql`
    subscription MessageSent {
  messageSent {
    id
    createdAt
    sender {
      id
      profile {
        avatarUrls {
          url
        }
        nickname
      }
    }
    content {
      body
    }
  }
}
    `;

/**
 * __useMessageSentSubscription__
 *
 * To run a query within a React component, call `useMessageSentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageSentSubscription, MessageSentSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSentSubscription, MessageSentSubscriptionVariables>(MessageSentDocument, options);
      }
export type MessageSentSubscriptionHookResult = ReturnType<typeof useMessageSentSubscription>;
export type MessageSentSubscriptionResult = Apollo.SubscriptionResult<MessageSentSubscription>;
export const GetChannelsDocument = gql`
    query GetChannels {
  channels {
    id
    uuid
    name
    users {
      user {
        profile {
          avatarUrls {
            url
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetChannelsQuery__
 *
 * To run a query within a React component, call `useGetChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChannelsQuery(baseOptions?: Apollo.QueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, options);
      }
export function useGetChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelsQuery, GetChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelsQuery, GetChannelsQueryVariables>(GetChannelsDocument, options);
        }
export type GetChannelsQueryHookResult = ReturnType<typeof useGetChannelsQuery>;
export type GetChannelsLazyQueryHookResult = ReturnType<typeof useGetChannelsLazyQuery>;
export type GetChannelsQueryResult = Apollo.QueryResult<GetChannelsQuery, GetChannelsQueryVariables>;
export const CreateChannelDocument = gql`
    mutation CreateChannel($name: String!) {
  createChannel(name: $name) {
    id
  }
}
    `;
export type CreateChannelMutationFn = Apollo.MutationFunction<CreateChannelMutation, CreateChannelMutationVariables>;

/**
 * __useCreateChannelMutation__
 *
 * To run a mutation, you first call `useCreateChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChannelMutation, { data, loading, error }] = useCreateChannelMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateChannelMutation(baseOptions?: Apollo.MutationHookOptions<CreateChannelMutation, CreateChannelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChannelMutation, CreateChannelMutationVariables>(CreateChannelDocument, options);
      }
export type CreateChannelMutationHookResult = ReturnType<typeof useCreateChannelMutation>;
export type CreateChannelMutationResult = Apollo.MutationResult<CreateChannelMutation>;
export type CreateChannelMutationOptions = Apollo.BaseMutationOptions<CreateChannelMutation, CreateChannelMutationVariables>;