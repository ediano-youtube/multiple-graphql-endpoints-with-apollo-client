import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSONString: { input: any; output: any; }
};

export type Echemical = Node & {
  __typename?: 'Echemical';
  current?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  cvtype?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  potential?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  sampleId?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  totalTime?: Maybe<Scalars['Float']['output']>;
};

export type EchemicalCountableConnection = {
  __typename?: 'EchemicalCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EchemicalCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `EchemicalCountable` and its cursor. */
export type EchemicalCountableEdge = {
  __typename?: 'EchemicalCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Echemical>;
};

export type Information = Node & {
  __typename?: 'Information';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type InformationCountableConnection = {
  __typename?: 'InformationCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InformationCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `InformationCountable` and its cursor. */
export type InformationCountableEdge = {
  __typename?: 'InformationCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Information>;
};

export type Key = Node & {
  __typename?: 'Key';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  systems?: Maybe<System>;
};

export type KeyCountableConnection = {
  __typename?: 'KeyCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<KeyCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `KeyCountable` and its cursor. */
export type KeyCountableEdge = {
  __typename?: 'KeyCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Key>;
};

export type Log = Node & {
  __typename?: 'Log';
  Logtext?: Maybe<Scalars['String']['output']>;
  aseId: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  logfile?: Maybe<Scalars['String']['output']>;
  logtype?: Maybe<Scalars['String']['output']>;
  systems?: Maybe<System>;
};

export type LogCountableConnection = {
  __typename?: 'LogCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LogCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `LogCountable` and its cursor. */
export type LogCountableEdge = {
  __typename?: 'LogCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Log>;
};

export type Material = Node & {
  __typename?: 'Material';
  arrangement?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<Scalars['String']['output']>;
  icddIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  icsdIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  latticeParameter?: Maybe<Scalars['String']['output']>;
  matId: Scalars['ID']['output'];
  morphology?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  pubId?: Maybe<Scalars['String']['output']>;
  spaceGroup?: Maybe<Scalars['String']['output']>;
};

export type MaterialCountableConnection = {
  __typename?: 'MaterialCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MaterialCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `MaterialCountable` and its cursor. */
export type MaterialCountableEdge = {
  __typename?: 'MaterialCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Material>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type NumberKeyValue = Node & {
  __typename?: 'NumberKeyValue';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  systems?: Maybe<System>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type NumberKeyValueCountableConnection = {
  __typename?: 'NumberKeyValueCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NumberKeyValueCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `NumberKeyValueCountable` and its cursor. */
export type NumberKeyValueCountableEdge = {
  __typename?: 'NumberKeyValueCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<NumberKeyValue>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Publication = Node & {
  __typename?: 'Publication';
  Stime?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Scalars['JSONString']['output']>;
  doi?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  journal?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['String']['output']>;
  pubId?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  pubtextsearch?: Maybe<Scalars['JSONString']['output']>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  stime?: Maybe<Scalars['Float']['output']>;
  systems?: Maybe<Array<Maybe<System>>>;
  tags?: Maybe<Scalars['JSONString']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PublicationCountableConnection = {
  __typename?: 'PublicationCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PublicationCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `PublicationCountable` and its cursor. */
export type PublicationCountableEdge = {
  __typename?: 'PublicationCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Publication>;
};

export type PublicationExp = Node & {
  __typename?: 'PublicationExp';
  Stime?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Scalars['JSONString']['output']>;
  doi?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  journal?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['String']['output']>;
  pubId?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  stime?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Scalars['JSONString']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PublicationExpCountableConnection = {
  __typename?: 'PublicationExpCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PublicationExpCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `PublicationExpCountable` and its cursor. */
export type PublicationExpCountableEdge = {
  __typename?: 'PublicationExpCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PublicationExp>;
};

export type Query = {
  __typename?: 'Query';
  echemical?: Maybe<EchemicalCountableConnection>;
  information?: Maybe<InformationCountableConnection>;
  key?: Maybe<KeyCountableConnection>;
  logs?: Maybe<LogCountableConnection>;
  materials?: Maybe<MaterialCountableConnection>;
  node?: Maybe<Node>;
  numberKeys?: Maybe<NumberKeyValueCountableConnection>;
  publications?: Maybe<PublicationCountableConnection>;
  publicationsExp?: Maybe<PublicationExpCountableConnection>;
  reactionSystems?: Maybe<ReactionSystemCountableConnection>;
  reactions?: Maybe<ReactionCountableConnection>;
  samples?: Maybe<SampleCountableConnection>;
  species?: Maybe<SpeciesCountableConnection>;
  systems?: Maybe<SystemCountableConnection>;
  textKeys?: Maybe<TextKeyValueCountableConnection>;
  xps?: Maybe<XpsCountableConnection>;
  xrd?: Maybe<XrdCountableConnection>;
};


export type QueryEchemicalArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Float']['input']>;
  cvtype?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  potential?: InputMaybe<Scalars['Float']['input']>;
  sampleId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  totalTime?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryInformationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};


export type QueryKeyArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aseId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  logfile?: InputMaybe<Scalars['String']['input']>;
  logtype?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMaterialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  arrangement?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  composition?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  icddIds?: InputMaybe<Scalars['Float']['input']>;
  icsdIds?: InputMaybe<Scalars['Float']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latticeParameter?: InputMaybe<Scalars['String']['input']>;
  matId?: InputMaybe<Scalars['Int']['input']>;
  morphology?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  pubId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  spaceGroup?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNumberKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  doi?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  journal?: InputMaybe<Scalars['String']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<Scalars['String']['input']>;
  pubId?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  pubtextsearch?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stime?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPublicationsExpArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  doi?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  journal?: InputMaybe<Scalars['String']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<Scalars['String']['input']>;
  pubId?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stime?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReactionSystemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  aseId?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  energyCorrection?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReactionsArgs = {
  activationEnergy?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chemicalComposition?: InputMaybe<Scalars['String']['input']>;
  coverages?: InputMaybe<Scalars['String']['input']>;
  dftCode?: InputMaybe<Scalars['String']['input']>;
  dftFunctional?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  facet?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Scalars['String']['input']>;
  pubId?: InputMaybe<Scalars['String']['input']>;
  reactants?: InputMaybe<Scalars['String']['input']>;
  reactionEnergy?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sites?: InputMaybe<Scalars['String']['input']>;
  surfaceComposition?: InputMaybe<Scalars['String']['input']>;
  textsearch?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySamplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  matId?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  pubId?: InputMaybe<Scalars['String']['input']>;
  sampleId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpeciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  n?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  z?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calculator?: InputMaybe<Scalars['String']['input']>;
  calculatorParameters?: InputMaybe<Scalars['String']['input']>;
  cell?: InputMaybe<Scalars['Float']['input']>;
  charge?: InputMaybe<Scalars['Float']['input']>;
  charges?: InputMaybe<Scalars['Float']['input']>;
  constraints?: InputMaybe<Scalars['String']['input']>;
  ctime?: InputMaybe<Scalars['Float']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dipole?: InputMaybe<Scalars['Float']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  energy?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fmax?: InputMaybe<Scalars['Float']['input']>;
  forces?: InputMaybe<Scalars['Float']['input']>;
  freeEnergy?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initialCharges?: InputMaybe<Scalars['Float']['input']>;
  initialMagmoms?: InputMaybe<Scalars['Float']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  keyValuePairs?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  magmom?: InputMaybe<Scalars['Float']['input']>;
  magmoms?: InputMaybe<Scalars['Float']['input']>;
  mass?: InputMaybe<Scalars['Float']['input']>;
  masses?: InputMaybe<Scalars['Float']['input']>;
  momenta?: InputMaybe<Scalars['Float']['input']>;
  mtime?: InputMaybe<Scalars['Float']['input']>;
  natoms?: InputMaybe<Scalars['Int']['input']>;
  numbers?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  pbc?: InputMaybe<Scalars['Int']['input']>;
  positions?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  smax?: InputMaybe<Scalars['Float']['input']>;
  stress?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Scalars['Float']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryTextKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};


export type QueryXpsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  bindingEnergy?: InputMaybe<Scalars['Float']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  intensity?: InputMaybe<Scalars['Float']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  matId?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  sampleId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  xpstype?: InputMaybe<Scalars['String']['input']>;
};


export type QueryXrdArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  degree?: InputMaybe<Scalars['Float']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  intensity?: InputMaybe<Scalars['Float']['input']>;
  jsonkey?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  matId?: InputMaybe<Scalars['Int']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  xrdtype?: InputMaybe<Scalars['String']['input']>;
};

export type Reaction = Node & {
  __typename?: 'Reaction';
  Equation?: Maybe<Scalars['String']['output']>;
  activationEnergy?: Maybe<Scalars['Float']['output']>;
  chemicalComposition?: Maybe<Scalars['String']['output']>;
  coverages?: Maybe<Scalars['JSONString']['output']>;
  dftCode?: Maybe<Scalars['String']['output']>;
  dftFunctional?: Maybe<Scalars['String']['output']>;
  facet?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  products?: Maybe<Scalars['JSONString']['output']>;
  pubId?: Maybe<Scalars['String']['output']>;
  publication?: Maybe<Publication>;
  reactants?: Maybe<Scalars['JSONString']['output']>;
  reactionEnergy?: Maybe<Scalars['Float']['output']>;
  reactionSystems?: Maybe<Array<Maybe<ReactionSystem>>>;
  sites?: Maybe<Scalars['JSONString']['output']>;
  surfaceComposition?: Maybe<Scalars['String']['output']>;
  systems?: Maybe<Array<Maybe<System>>>;
  textsearch?: Maybe<Scalars['JSONString']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ReactionCountableConnection = {
  __typename?: 'ReactionCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReactionCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ReactionCountable` and its cursor. */
export type ReactionCountableEdge = {
  __typename?: 'ReactionCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Reaction>;
};

export type ReactionSystem = Node & {
  __typename?: 'ReactionSystem';
  aseId: Scalars['String']['output'];
  energyCorrection?: Maybe<Scalars['Float']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Reaction>;
  systems?: Maybe<System>;
};

export type ReactionSystemCountableConnection = {
  __typename?: 'ReactionSystemCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReactionSystemCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ReactionSystemCountable` and its cursor. */
export type ReactionSystemCountableEdge = {
  __typename?: 'ReactionSystemCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ReactionSystem>;
};

export type Sample = Node & {
  __typename?: 'Sample';
  data?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  matId?: Maybe<Scalars['Int']['output']>;
  pubId?: Maybe<Scalars['String']['output']>;
  sampleId: Scalars['ID']['output'];
};

export type SampleCountableConnection = {
  __typename?: 'SampleCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SampleCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SampleCountable` and its cursor. */
export type SampleCountableEdge = {
  __typename?: 'SampleCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Sample>;
};

export type Species = Node & {
  __typename?: 'Species';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  n: Scalars['ID']['output'];
  systems?: Maybe<System>;
  z: Scalars['ID']['output'];
};

export type SpeciesCountableConnection = {
  __typename?: 'SpeciesCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SpeciesCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SpeciesCountable` and its cursor. */
export type SpeciesCountableEdge = {
  __typename?: 'SpeciesCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Species>;
};

export type System = Node & {
  __typename?: 'System';
  Adsorbate?: Maybe<Scalars['String']['output']>;
  Cifdata?: Maybe<Scalars['String']['output']>;
  Ctime?: Maybe<Scalars['String']['output']>;
  DftCode?: Maybe<Scalars['String']['output']>;
  DftFunctional?: Maybe<Scalars['String']['output']>;
  Facet?: Maybe<Scalars['String']['output']>;
  Formula?: Maybe<Scalars['String']['output']>;
  InputFile?: Maybe<Scalars['String']['output']>;
  Mtime?: Maybe<Scalars['String']['output']>;
  Pbc?: Maybe<Scalars['String']['output']>;
  Reaction?: Maybe<Scalars['String']['output']>;
  Substrate?: Maybe<Scalars['String']['output']>;
  Trajdata?: Maybe<Scalars['String']['output']>;
  Username?: Maybe<Scalars['String']['output']>;
  calculator?: Maybe<Scalars['String']['output']>;
  calculatorParameters?: Maybe<Scalars['String']['output']>;
  cell?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  charge?: Maybe<Scalars['Float']['output']>;
  charges?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  constraints?: Maybe<Scalars['String']['output']>;
  ctime?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Scalars['JSONString']['output']>;
  dipole?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  energy?: Maybe<Scalars['Float']['output']>;
  fmax?: Maybe<Scalars['Float']['output']>;
  forces?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  freeEnergy?: Maybe<Scalars['Float']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  initialCharges?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  initialMagmoms?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  keyValuePairs?: Maybe<Scalars['JSONString']['output']>;
  keys?: Maybe<KeyCountableConnection>;
  log?: Maybe<Array<Maybe<Log>>>;
  magmom?: Maybe<Scalars['Float']['output']>;
  magmoms?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  mass?: Maybe<Scalars['Float']['output']>;
  masses?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  momenta?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mtime?: Maybe<Scalars['Float']['output']>;
  natoms?: Maybe<Scalars['Int']['output']>;
  numberKeys?: Maybe<NumberKeyValueCountableConnection>;
  numbers?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  pbc?: Maybe<Scalars['Int']['output']>;
  positions?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  publication?: Maybe<Array<Maybe<Publication>>>;
  reactionSystems?: Maybe<ReactionSystemCountableConnection>;
  reactions?: Maybe<ReactionCountableConnection>;
  smax?: Maybe<Scalars['Float']['output']>;
  species?: Maybe<SpeciesCountableConnection>;
  stress?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  tags?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  textKeys?: Maybe<TextKeyValueCountableConnection>;
  uniqueId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['Float']['output']>;
};


export type SystemInputFileArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};


export type SystemKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemNumberKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemReactionSystemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemReactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemSpeciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemTextKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemCountableConnection = {
  __typename?: 'SystemCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SystemCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SystemCountable` and its cursor. */
export type SystemCountableEdge = {
  __typename?: 'SystemCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<System>;
};

export type TextKeyValue = Node & {
  __typename?: 'TextKeyValue';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  systems?: Maybe<System>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TextKeyValueCountableConnection = {
  __typename?: 'TextKeyValueCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TextKeyValueCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `TextKeyValueCountable` and its cursor. */
export type TextKeyValueCountableEdge = {
  __typename?: 'TextKeyValueCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TextKeyValue>;
};

export type Xps = Node & {
  __typename?: 'Xps';
  bindingEnergy?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  intensity?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  matId: Scalars['ID']['output'];
  sampleId?: Maybe<Scalars['Int']['output']>;
  xpstype?: Maybe<Scalars['String']['output']>;
};

export type XpsCountableConnection = {
  __typename?: 'XpsCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<XpsCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `XpsCountable` and its cursor. */
export type XpsCountableEdge = {
  __typename?: 'XpsCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Xps>;
};

export type Xrd = Node & {
  __typename?: 'Xrd';
  degree?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  intensity?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  matId: Scalars['ID']['output'];
  xrdtype?: Maybe<Scalars['String']['output']>;
};

export type XrdCountableConnection = {
  __typename?: 'XrdCountableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<XrdCountableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `XrdCountable` and its cursor. */
export type XrdCountableEdge = {
  __typename?: 'XrdCountableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Xrd>;
};

export type GetInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInformationQuery = { __typename?: 'Query', information?: { __typename?: 'InformationCountableConnection', edges: Array<{ __typename?: 'InformationCountableEdge', node?: { __typename?: 'Information', name: string, value?: string | null } | null } | null>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null };


export const GetInformationDocument = gql`
    query GetInformation {
  information {
    edges {
      node {
        name
        value
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useGetInformationQuery__
 *
 * To run a query within a React component, call `useGetInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInformationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInformationQuery(baseOptions?: Apollo.QueryHookOptions<GetInformationQuery, GetInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInformationQuery, GetInformationQueryVariables>(GetInformationDocument, options);
      }
export function useGetInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInformationQuery, GetInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInformationQuery, GetInformationQueryVariables>(GetInformationDocument, options);
        }
export function useGetInformationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetInformationQuery, GetInformationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetInformationQuery, GetInformationQueryVariables>(GetInformationDocument, options);
        }
export type GetInformationQueryHookResult = ReturnType<typeof useGetInformationQuery>;
export type GetInformationLazyQueryHookResult = ReturnType<typeof useGetInformationLazyQuery>;
export type GetInformationSuspenseQueryHookResult = ReturnType<typeof useGetInformationSuspenseQuery>;
export type GetInformationQueryResult = Apollo.QueryResult<GetInformationQuery, GetInformationQueryVariables>;