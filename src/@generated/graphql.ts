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
  /** プロフィール情報を取得 */
  profile: ProfileOutput;
  /** 受け取ったいいね一覧を取得 */
  receivedLikes: ReceivedLikesOutput;
  /** ユーザーの検索 */
  searchProfiles: ProfileDetailsConnection;
  /** いいねを送った人の一覧を取得 */
  sentLikes: SentLikesOutput;
  /** トークを取得 */
  talk?: Maybe<Talk>;
  /** トーク一覧を取得 */
  talks: Array<Talk>;
  /** ログイン中のユーザーを取得 */
  viewer: User;
};


export type QueryProfileArgs = {
  id: Scalars['Int'];
};


export type QuerySearchProfilesArgs = {
  connectionArgs: ConnectionArguments;
  filterArgs?: InputMaybe<ProfileDetailsFilterArgs>;
};


export type QueryTalkArgs = {
  uuid: Scalars['String'];
};

/** プロフィールクエリの返り値 */
export type ProfileOutput = {
  __typename?: 'ProfileOutput';
  /** 年齢 */
  age: Scalars['Int'];
  /** 市区町村のコード */
  cityCode?: Maybe<Scalars['Int']>;
  /** 飲酒 */
  drinking?: Maybe<Drinking>;
  /** 学歴 */
  education?: Maybe<Education>;
  /** 体型 */
  figure?: Maybe<Figure>;
  /** このユーザーからいいねをもらえているかどうか */
  hasReceivedLike: Scalars['Boolean'];
  /** 身長 */
  height?: Maybe<Scalars['Int']>;
  /** このユーザーに対していいねを送っているかどうか */
  isSentLike: Scalars['Boolean'];
  /** メインプロフィール画像 */
  mainAvatar?: Maybe<Scalars['String']>;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** 職業 */
  occupation?: Maybe<Occupation>;
  /** 都道府県のコード */
  prefectureCode?: Maybe<Scalars['Int']>;
  /** 自己紹介 */
  selfIntroduction?: Maybe<Scalars['String']>;
  /** 喫煙 */
  smoking?: Maybe<Smoking>;
  /** サブプロフィール画像の一覧 */
  subAvatar: Array<SubAvatar>;
  /** ユーザーID */
  userId: Scalars['Int'];
};

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

/** サブのプロフィール画像 */
export type SubAvatar = {
  __typename?: 'SubAvatar';
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
  /** Profile.id */
  profileId: Scalars['Int'];
  /** プロフィール画像のURL */
  url: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  _count: ProfileCount;
  /** 誕生日 */
  birthday: Scalars['DateTime'];
  /** 血液型 */
  bloodType: BloodType;
  /** 市区町村のコード */
  cityCode?: Maybe<Scalars['Int']>;
  detail?: Maybe<ProfileDetail>;
  /** 性別 */
  gender: Gender;
  id: Scalars['ID'];
  /** メインのプロフィール画像 */
  mainAvatar?: Maybe<Scalars['String']>;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** 都道府県のコード */
  prefectureCode: Scalars['Int'];
  /** 自己紹介 */
  selfIntroduction?: Maybe<Scalars['String']>;
  subAvatar?: Maybe<Array<SubAvatar>>;
  user: User;
  /** User.id */
  userId: Scalars['Int'];
};

export type ProfileCount = {
  __typename?: 'ProfileCount';
  subAvatar: Scalars['Int'];
};

/** 血液型 */
export enum BloodType {
  A = 'A',
  Ab = 'AB',
  B = 'B',
  O = 'O'
}

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

/** 結婚状況 */
export enum MaritalStatus {
  Bereavement = 'BEREAVEMENT',
  Divorce = 'DIVORCE',
  Single = 'SINGLE'
}

/** 性別 */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type User = {
  __typename?: 'User';
  _count: UserCount;
  /** メールアドレス */
  email: Scalars['String'];
  id: Scalars['ID'];
  profile?: Maybe<Profile>;
  /** サービスプラン */
  servicePlan: ServicePlan;
  /** ユーザーの状態 */
  status: UserStatus;
};

export type UserCount = {
  __typename?: 'UserCount';
  message: Scalars['Int'];
  receivedLikes: Scalars['Int'];
  sentLikes: Scalars['Int'];
  userTalkJoins: Scalars['Int'];
};

export enum ServicePlan {
  Free = 'FREE',
  Vip = 'VIP'
}

/** ユーザーの状態 */
export enum UserStatus {
  Available = 'AVAILABLE',
  Frozen = 'FROZEN',
  LoggedInByExternal = 'LOGGED_IN_BY_EXTERNAL',
  Unauthenticated = 'UNAUTHENTICATED',
  Verified = 'VERIFIED'
}

export type ReceivedLikesOutput = {
  __typename?: 'ReceivedLikesOutput';
  likes: Array<ReceivedLikes>;
};

/** いいねを受け取った人の情報 */
export type ReceivedLikes = {
  __typename?: 'ReceivedLikes';
  /** 年齢 */
  age: Scalars['Int'];
  /** メインプロフィールの画像 */
  mainAvatar?: Maybe<Scalars['String']>;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** プロフィールのID（プロフィール情報を取得する際に利用） */
  profileId: Scalars['Int'];
  /** ユーザーID（マッチをする際に利用） */
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

/** プロフィール検索の結果 */
export type ProfileDetailsConnection = {
  __typename?: 'ProfileDetailsConnection';
  edges: Array<Edge>;
  nodes: Array<SearchProfilesOutput>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Edge = {
  __typename?: 'Edge';
  cursor: Scalars['String'];
  node: SearchProfilesOutput;
};

export type SearchProfilesOutput = {
  __typename?: 'SearchProfilesOutput';
  /** 年齢 */
  age: Scalars['Int'];
  /** メインプロフィール画像 */
  mainAvatar?: Maybe<Scalars['String']>;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** プロフィールID */
  profileId: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** いいねを送った人の一覧 */
export type SentLikesOutput = {
  __typename?: 'SentLikesOutput';
  likes: Array<SentLikes>;
};

/** いいねを送った人の情報 */
export type SentLikes = {
  __typename?: 'SentLikes';
  /** 年齢 */
  age: Scalars['Int'];
  /** メインプロフィールの画像 */
  mainAvatar?: Maybe<Scalars['String']>;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** プロフィールのID */
  profileId: Scalars['Int'];
};

export type Talk = {
  __typename?: 'Talk';
  _count: TalkCount;
  messages?: Maybe<Array<Message>>;
  users?: Maybe<Array<UserTalkJoin>>;
  /** トークを識別するユニークID */
  uuid: Scalars['String'];
};

export type TalkCount = {
  __typename?: 'TalkCount';
  messages: Scalars['Int'];
  users: Scalars['Int'];
};

export type Message = {
  __typename?: 'Message';
  content: MessageContent;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  messageContentId: Scalars['Int'];
  sender?: Maybe<User>;
  senderId: Scalars['Int'];
  talk?: Maybe<Talk>;
  talkId: Scalars['Int'];
};

export type MessageContent = {
  __typename?: 'MessageContent';
  /** メッセージ本文 */
  body: Scalars['String'];
  id: Scalars['ID'];
  message?: Maybe<Message>;
};

export type UserTalkJoin = {
  __typename?: 'UserTalkJoin';
  joinedAt: Scalars['DateTime'];
  talk: Talk;
  talkId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 退会する処理 */
  cancelMembership: CancelMembershipOutput;
  /** ログイン */
  login: AuthenticateOutput;
  /** ログアウト */
  logout: LogoutOutput;
  /** アクセストークンが切れた際に実行して、最新のトークンを取得する処理 */
  refreshToken: AuthenticateOutput;
  /** ユーザーの本登録時に実行する処理 */
  registerProfile: RegisterProfileOutput;
  /** Firebase Cloud Messagingのトークンを保存 */
  saveFcmToken: FcmToken;
  /** いいねを送る処理 */
  sendLike: SendLikeOutput;
  /** メッセージを送信 */
  sendMessage: Message;
  /** ユーザ情報を更新 */
  updateUser: User;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterProfileArgs = {
  input: RegisterProfileInput;
};


export type MutationSaveFcmTokenArgs = {
  input: SaveFcmTokenInput;
};


export type MutationSendLikeArgs = {
  input: SendLikeInput;
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type CancelMembershipOutput = {
  __typename?: 'CancelMembershipOutput';
  /** 退会に成功したか */
  isSucceeded: Scalars['Boolean'];
};

export type LoginInput = {
  /** 認証プロバイダー */
  authProvider: AuthProvider;
  /** 認証プロバイダーに紐づくID */
  authProviderId?: InputMaybe<Scalars['String']>;
  /** メールアドレス */
  email: Scalars['String'];
  /** ユーザー名 */
  nickname: Scalars['String'];
};

export enum AuthProvider {
  Apple = 'APPLE',
  Google = 'GOOGLE',
  Line = 'LINE',
  Phone = 'PHONE'
}

export type AuthenticateOutput = {
  __typename?: 'AuthenticateOutput';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type LogoutOutput = {
  __typename?: 'LogoutOutput';
  /** ログアウトに成功したか */
  isSucceeded: Scalars['Boolean'];
};

/** アカウント登録時に渡す値 */
export type RegisterProfileInput = {
  /** 誕生日 */
  birthday: Scalars['DateTime'];
  /** 性別 */
  gender: Gender;
  /** ニックネーム */
  nickname: Scalars['String'];
  /** 都道府県コード */
  prefectureCode?: InputMaybe<Scalars['Int']>;
};

export type RegisterProfileOutput = {
  __typename?: 'RegisterProfileOutput';
  isSucceeded: Scalars['Boolean'];
};

export type SaveFcmTokenInput = {
  /** Firebase Cloud Messagingのトークン */
  value: Scalars['String'];
};

/** Firebase Cloud Messaging のトークンを保持 */
export type FcmToken = {
  __typename?: 'FcmToken';
  id: Scalars['ID'];
  user: User;
  /** User.id */
  userId: Scalars['Int'];
  /** トークン */
  value: Scalars['String'];
};

export type SendLikeInput = {
  /** 受け取り先となるユーザーID */
  receiverId: Scalars['Int'];
};

export type SendLikeOutput = {
  __typename?: 'SendLikeOutput';
  /** 成功したかどうか */
  isSucceeded: Scalars['Boolean'];
};

export type SendMessageInput = {
  /** メッセージ本文 */
  body: Scalars['String'];
  /** チャンネルのuuid */
  talkUuid: Scalars['String'];
};

/** ユーザー情報更新時に渡す値 */
export type UpdateUserInput = {
  /** 年収 */
  annualIncome?: InputMaybe<AnnualIncome>;
  /** 飲酒 */
  drinking?: InputMaybe<Drinking>;
  /** 学歴 */
  education?: InputMaybe<Education>;
  /** メールアドレス */
  email?: InputMaybe<Scalars['String']>;
  /** 体型 */
  figure?: InputMaybe<Figure>;
  /** 身長 */
  height?: InputMaybe<Scalars['Int']>;
  /** 結婚状況 */
  maritalStatus?: InputMaybe<MaritalStatus>;
  /** ニックネーム */
  nickname?: InputMaybe<Scalars['String']>;
  /** 職業 */
  occupation?: InputMaybe<Occupation>;
  /** 喫煙 */
  smoking?: InputMaybe<Smoking>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** メッセージ送信を監視 */
  messageSent: Message;
};


export type SubscriptionMessageSentArgs = {
  talkUuid: Scalars['String'];
};

/** いいね */
export type Like = {
  __typename?: 'Like';
  /** いいねした時間 */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  userLikeOffer?: Maybe<UserLikeOffer>;
};

/** ユーザーといいねの中間テーブル */
export type UserLikeOffer = {
  __typename?: 'UserLikeOffer';
  like: Like;
  /** いいねのID */
  likeId: Scalars['Int'];
  receiver: User;
  /** いいねを受け取った人のユーザーID */
  receiverId: Scalars['Int'];
  sender: User;
  /** いいねを送った人のユーザーID */
  senderId: Scalars['Int'];
};

export type GetViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetViewerQuery = { __typename?: 'Query', viewer: { __typename?: 'User', id: string, profile?: { __typename?: 'Profile', nickname: string, mainAvatar?: string | null } | null } };

export type GetTalkQueryVariables = Exact<{
  talkUuid: Scalars['String'];
}>;


export type GetTalkQuery = { __typename?: 'Query', talk?: { __typename?: 'Talk', uuid: string, messages?: Array<{ __typename?: 'Message', id: string, senderId: number, createdAt: any, sender?: { __typename?: 'User', profile?: { __typename?: 'Profile', nickname: string } | null } | null, content: { __typename?: 'MessageContent', body: string } }> | null } | null };

export type SendMessageMutationVariables = Exact<{
  input: SendMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string, talkId: number, senderId: number, messageContentId: number, createdAt: any, talk?: { __typename?: 'Talk', uuid: string } | null, sender?: { __typename?: 'User', id: string, email: string, servicePlan: ServicePlan, status: UserStatus } | null } };

export type MessageSentSubscriptionVariables = Exact<{
  talkUuid: Scalars['String'];
}>;


export type MessageSentSubscription = { __typename?: 'Subscription', messageSent: { __typename?: 'Message', id: string, talkId: number, senderId: number, messageContentId: number, createdAt: any, talk?: { __typename?: 'Talk', uuid: string } | null, sender?: { __typename?: 'User', id: string, email: string, servicePlan: ServicePlan, status: UserStatus } | null, content: { __typename?: 'MessageContent', id: string, body: string } } };

export type GetTalksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTalksQuery = { __typename?: 'Query', talks: Array<{ __typename?: 'Talk', uuid: string, users?: Array<{ __typename?: 'UserTalkJoin', user: { __typename?: 'User', profile?: { __typename?: 'Profile', mainAvatar?: string | null } | null } }> | null }> };


export const GetViewerDocument = gql`
    query GetViewer {
  viewer {
    id
    profile {
      nickname
      mainAvatar
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
export const GetTalkDocument = gql`
    query GetTalk($talkUuid: String!) {
  talk(uuid: $talkUuid) {
    uuid
    messages {
      id
      senderId
      sender {
        profile {
          nickname
        }
      }
      createdAt
      content {
        body
      }
    }
  }
}
    `;

/**
 * __useGetTalkQuery__
 *
 * To run a query within a React component, call `useGetTalkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTalkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTalkQuery({
 *   variables: {
 *      talkUuid: // value for 'talkUuid'
 *   },
 * });
 */
export function useGetTalkQuery(baseOptions: Apollo.QueryHookOptions<GetTalkQuery, GetTalkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTalkQuery, GetTalkQueryVariables>(GetTalkDocument, options);
      }
export function useGetTalkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTalkQuery, GetTalkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTalkQuery, GetTalkQueryVariables>(GetTalkDocument, options);
        }
export type GetTalkQueryHookResult = ReturnType<typeof useGetTalkQuery>;
export type GetTalkLazyQueryHookResult = ReturnType<typeof useGetTalkLazyQuery>;
export type GetTalkQueryResult = Apollo.QueryResult<GetTalkQuery, GetTalkQueryVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($input: SendMessageInput!) {
  sendMessage(input: $input) {
    id
    talkId
    senderId
    messageContentId
    createdAt
    talk {
      uuid
    }
    sender {
      id
      email
      servicePlan
      status
    }
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
 *      input: // value for 'input'
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
    subscription MessageSent($talkUuid: String!) {
  messageSent(talkUuid: $talkUuid) {
    id
    talkId
    senderId
    messageContentId
    createdAt
    talk {
      uuid
    }
    sender {
      id
      email
      servicePlan
      status
    }
    content {
      id
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
 *      talkUuid: // value for 'talkUuid'
 *   },
 * });
 */
export function useMessageSentSubscription(baseOptions: Apollo.SubscriptionHookOptions<MessageSentSubscription, MessageSentSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessageSentSubscription, MessageSentSubscriptionVariables>(MessageSentDocument, options);
      }
export type MessageSentSubscriptionHookResult = ReturnType<typeof useMessageSentSubscription>;
export type MessageSentSubscriptionResult = Apollo.SubscriptionResult<MessageSentSubscription>;
export const GetTalksDocument = gql`
    query GetTalks {
  talks {
    uuid
    users {
      user {
        profile {
          mainAvatar
        }
      }
    }
  }
}
    `;

/**
 * __useGetTalksQuery__
 *
 * To run a query within a React component, call `useGetTalksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTalksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTalksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTalksQuery(baseOptions?: Apollo.QueryHookOptions<GetTalksQuery, GetTalksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTalksQuery, GetTalksQueryVariables>(GetTalksDocument, options);
      }
export function useGetTalksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTalksQuery, GetTalksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTalksQuery, GetTalksQueryVariables>(GetTalksDocument, options);
        }
export type GetTalksQueryHookResult = ReturnType<typeof useGetTalksQuery>;
export type GetTalksLazyQueryHookResult = ReturnType<typeof useGetTalksLazyQuery>;
export type GetTalksQueryResult = Apollo.QueryResult<GetTalksQuery, GetTalksQueryVariables>;