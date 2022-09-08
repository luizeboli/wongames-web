import * as Apollo from '@apollo/client';

import * as Operations from '..';
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
  /**
   * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type TBanner = {
  button: TComponentPageButton;
  createdAt?: Maybe<Scalars['DateTime']>;
  image: TUploadFileEntityResponse;
  ribbon?: Maybe<TComponentPageRibbon>;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TBannerEntity = {
  attributes: TBanner;
  id: Scalars['ID'];
};

export type TBannerEntityResponse = {
  data: TBannerEntity;
};

export type TBannerEntityResponseCollection = {
  data: Array<TBannerEntity>;
  meta: TResponseCollectionMeta;
};

export type TBannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TBannerFiltersInput>>>;
  button?: InputMaybe<TComponentPageButtonFiltersInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  id?: InputMaybe<TIdFilterInput>;
  not?: InputMaybe<TBannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TBannerFiltersInput>>>;
  ribbon?: InputMaybe<TComponentPageRibbonFiltersInput>;
  subtitle?: InputMaybe<TStringFilterInput>;
  title?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TBannerInput = {
  button?: InputMaybe<TComponentPageButtonInput>;
  image?: InputMaybe<Scalars['ID']>;
  ribbon?: InputMaybe<TComponentPageRibbonInput>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TBooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<TBooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type TCategory = {
  createdAt?: Maybe<Scalars['DateTime']>;
  games?: Maybe<TGameRelationResponseCollection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TCategoryGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TCategoryEntity = {
  attributes: TCategory;
  id: Scalars['ID'];
};

export type TCategoryEntityResponse = {
  data: TCategoryEntity;
};

export type TCategoryEntityResponseCollection = {
  data: Array<TCategoryEntity>;
  meta: TResponseCollectionMeta;
};

export type TCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TCategoryFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  games?: InputMaybe<TGameFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TCategoryFiltersInput>>>;
  slug?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TCategoryInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type TCategoryRelationResponseCollection = {
  data: Array<TCategoryEntity>;
};

export type TComponentPageButton = {
  id: Scalars['ID'];
  label: Scalars['String'];
  link: Scalars['String'];
};

export type TComponentPageButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TComponentPageButtonFiltersInput>>>;
  label?: InputMaybe<TStringFilterInput>;
  link?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TComponentPageButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TComponentPageButtonFiltersInput>>>;
};

export type TComponentPageButtonInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
};

export type TComponentPageHighlight = {
  alignment?: Maybe<TEnum_Componentpagehighlight_Alignment>;
  background: TUploadFileEntityResponse;
  buttonLabel: Scalars['String'];
  buttonLink: Scalars['String'];
  floatImage?: Maybe<TUploadFileEntityResponse>;
  id: Scalars['ID'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type TComponentPageHighlightInput = {
  alignment?: InputMaybe<TEnum_Componentpagehighlight_Alignment>;
  background?: InputMaybe<Scalars['ID']>;
  buttonLabel?: InputMaybe<Scalars['String']>;
  buttonLink?: InputMaybe<Scalars['String']>;
  floatImage?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TComponentPagePopularGames = {
  games?: Maybe<TGameRelationResponseCollection>;
  highlight?: Maybe<TComponentPageHighlight>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type TComponentPagePopularGamesGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TComponentPagePopularGamesInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  highlight?: InputMaybe<TComponentPageHighlightInput>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TComponentPageRibbon = {
  color?: Maybe<TEnum_Componentpageribbon_Color>;
  id: Scalars['ID'];
  size?: Maybe<TEnum_Componentpageribbon_Size>;
  text: Scalars['String'];
};

export type TComponentPageRibbonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TComponentPageRibbonFiltersInput>>>;
  color?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TComponentPageRibbonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TComponentPageRibbonFiltersInput>>>;
  size?: InputMaybe<TStringFilterInput>;
  text?: InputMaybe<TStringFilterInput>;
};

export type TComponentPageRibbonInput = {
  color?: InputMaybe<TEnum_Componentpageribbon_Color>;
  id?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<TEnum_Componentpageribbon_Size>;
  text?: InputMaybe<Scalars['String']>;
};

export type TComponentPageSection = {
  games?: Maybe<TGameRelationResponseCollection>;
  highlight?: Maybe<TComponentPageHighlight>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type TComponentPageSectionGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TComponentPageSectionInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  highlight?: InputMaybe<TComponentPageHighlightInput>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TDateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<TDateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type TDateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<TDateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type TDeveloper = {
  createdAt?: Maybe<Scalars['DateTime']>;
  games?: Maybe<TGameRelationResponseCollection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TDeveloperGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TDeveloperEntity = {
  attributes: TDeveloper;
  id: Scalars['ID'];
};

export type TDeveloperEntityResponse = {
  data: TDeveloperEntity;
};

export type TDeveloperEntityResponseCollection = {
  data: Array<TDeveloperEntity>;
  meta: TResponseCollectionMeta;
};

export type TDeveloperFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TDeveloperFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  games?: InputMaybe<TGameFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TDeveloperFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TDeveloperFiltersInput>>>;
  slug?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TDeveloperInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type TDeveloperRelationResponseCollection = {
  data: Array<TDeveloperEntity>;
};

export enum TEnum_Componentpagehighlight_Alignment {
  Left = 'left',
  Right = 'right',
}

export enum TEnum_Componentpageribbon_Color {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum TEnum_Componentpageribbon_Size {
  Normal = 'normal',
  Small = 'small',
}

export enum TEnum_Game_Rating {
  Br_0 = 'br_0',
  Br_10 = 'br_10',
  Br_12 = 'br_12',
  Br_14 = 'br_14',
  Br_16 = 'br_16',
  Br_18 = 'br_18',
  Free = 'free',
}

export type TEmailDesignerEmailTemplate = {
  bodyHtml?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  design?: Maybe<Scalars['JSON']>;
  enabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  templateReferenceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TEmailDesignerEmailTemplateEntity = {
  attributes: TEmailDesignerEmailTemplate;
  id: Scalars['ID'];
};

export type TEmailDesignerEmailTemplateEntityResponse = {
  data: TEmailDesignerEmailTemplateEntity;
};

export type TEmailDesignerEmailTemplateEntityResponseCollection = {
  data: Array<TEmailDesignerEmailTemplateEntity>;
  meta: TResponseCollectionMeta;
};

export type TEmailDesignerEmailTemplateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TEmailDesignerEmailTemplateFiltersInput>>>;
  bodyHtml?: InputMaybe<TStringFilterInput>;
  bodyText?: InputMaybe<TStringFilterInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  design?: InputMaybe<TJsonFilterInput>;
  enabled?: InputMaybe<TBooleanFilterInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TEmailDesignerEmailTemplateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TEmailDesignerEmailTemplateFiltersInput>>>;
  subject?: InputMaybe<TStringFilterInput>;
  tags?: InputMaybe<TJsonFilterInput>;
  templateReferenceId?: InputMaybe<TIntFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TEmailDesignerEmailTemplateInput = {
  bodyHtml?: InputMaybe<Scalars['String']>;
  bodyText?: InputMaybe<Scalars['String']>;
  design?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  templateReferenceId?: InputMaybe<Scalars['Int']>;
};

export type TFileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TFloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<TFloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type TGame = {
  categories?: Maybe<TCategoryRelationResponseCollection>;
  cover: TUploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  developers?: Maybe<TDeveloperRelationResponseCollection>;
  gallery?: Maybe<TUploadFileRelationResponseCollection>;
  name: Scalars['String'];
  platforms?: Maybe<TPlatformRelationResponseCollection>;
  price: Scalars['Float'];
  publisher?: Maybe<TPublisherEntityResponse>;
  rating?: Maybe<TEnum_Game_Rating>;
  release_date?: Maybe<Scalars['Date']>;
  short_description: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TGameCategoriesArgs = {
  filters?: InputMaybe<TCategoryFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TGameDevelopersArgs = {
  filters?: InputMaybe<TDeveloperFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TGameGalleryArgs = {
  filters?: InputMaybe<TUploadFileFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TGamePlatformsArgs = {
  filters?: InputMaybe<TPlatformFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TGameEntity = {
  attributes: TGame;
  id: Scalars['ID'];
};

export type TGameEntityResponse = {
  data: TGameEntity;
};

export type TGameEntityResponseCollection = {
  data: Array<TGameEntity>;
  meta: TResponseCollectionMeta;
};

export type TGameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TGameFiltersInput>>>;
  categories?: InputMaybe<TCategoryFiltersInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  description?: InputMaybe<TStringFilterInput>;
  developers?: InputMaybe<TDeveloperFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TGameFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TGameFiltersInput>>>;
  platforms?: InputMaybe<TPlatformFiltersInput>;
  price?: InputMaybe<TFloatFilterInput>;
  publisher?: InputMaybe<TPublisherFiltersInput>;
  rating?: InputMaybe<TStringFilterInput>;
  release_date?: InputMaybe<TDateFilterInput>;
  short_description?: InputMaybe<TStringFilterInput>;
  slug?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TGameInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  cover?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Float']>;
  publisher?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<TEnum_Game_Rating>;
  release_date?: InputMaybe<Scalars['Date']>;
  short_description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type TGameRelationResponseCollection = {
  data: Array<TGameEntity>;
};

export type TGenericMorph =
  | TBanner
  | TCategory
  | TComponentPageButton
  | TComponentPageHighlight
  | TComponentPagePopularGames
  | TComponentPageRibbon
  | TComponentPageSection
  | TDeveloper
  | TEmailDesignerEmailTemplate
  | TGame
  | THome
  | TOrder
  | TPlatform
  | TPublisher
  | TRecommended
  | TUploadFile
  | TUploadFolder
  | TUsersPermissionsPermission
  | TUsersPermissionsRole
  | TUsersPermissionsUser
  | TWishlist;

export type THome = {
  createdAt?: Maybe<Scalars['DateTime']>;
  freeGames?: Maybe<TComponentPageSection>;
  newGames?: Maybe<TComponentPageSection>;
  popularGames?: Maybe<TComponentPagePopularGames>;
  upcomingGames?: Maybe<TComponentPageSection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type THomeEntity = {
  attributes: THome;
  id: Scalars['ID'];
};

export type THomeEntityResponse = {
  data: THomeEntity;
};

export type THomeInput = {
  freeGames?: InputMaybe<TComponentPageSectionInput>;
  newGames?: InputMaybe<TComponentPageSectionInput>;
  popularGames?: InputMaybe<TComponentPagePopularGamesInput>;
  upcomingGames?: InputMaybe<TComponentPageSectionInput>;
};

export type TIdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<TIdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type TIntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<TIntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type TJsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<TJsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type TLongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<TLongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type TMutation = {
  createBanner?: Maybe<TBannerEntityResponse>;
  createCategory?: Maybe<TCategoryEntityResponse>;
  createDeveloper?: Maybe<TDeveloperEntityResponse>;
  createEmailDesignerEmailTemplate?: Maybe<TEmailDesignerEmailTemplateEntityResponse>;
  createGame?: Maybe<TGameEntityResponse>;
  createOrder?: Maybe<TOrderEntityResponse>;
  createPlatform?: Maybe<TPlatformEntityResponse>;
  createPublisher?: Maybe<TPublisherEntityResponse>;
  createUploadFile?: Maybe<TUploadFileEntityResponse>;
  createUploadFolder?: Maybe<TUploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<TUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: TUsersPermissionsUserEntityResponse;
  createWishlist?: Maybe<TWishlistEntityResponse>;
  deleteBanner?: Maybe<TBannerEntityResponse>;
  deleteCategory?: Maybe<TCategoryEntityResponse>;
  deleteDeveloper?: Maybe<TDeveloperEntityResponse>;
  deleteEmailDesignerEmailTemplate?: Maybe<TEmailDesignerEmailTemplateEntityResponse>;
  deleteGame?: Maybe<TGameEntityResponse>;
  deleteHome?: Maybe<THomeEntityResponse>;
  deleteOrder?: Maybe<TOrderEntityResponse>;
  deletePlatform?: Maybe<TPlatformEntityResponse>;
  deletePublisher?: Maybe<TPublisherEntityResponse>;
  deleteRecommended?: Maybe<TRecommendedEntityResponse>;
  deleteUploadFile?: Maybe<TUploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<TUploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<TUsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: TUsersPermissionsUserEntityResponse;
  deleteWishlist?: Maybe<TWishlistEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<TUsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<TUsersPermissionsPasswordPayload>;
  login: TUsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<TUploadFileEntityResponse>>;
  /** Register a user */
  register: TUsersPermissionsLoginPayload;
  removeFile?: Maybe<TUploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<TUsersPermissionsLoginPayload>;
  updateBanner?: Maybe<TBannerEntityResponse>;
  updateCategory?: Maybe<TCategoryEntityResponse>;
  updateDeveloper?: Maybe<TDeveloperEntityResponse>;
  updateEmailDesignerEmailTemplate?: Maybe<TEmailDesignerEmailTemplateEntityResponse>;
  updateFileInfo: TUploadFileEntityResponse;
  updateGame?: Maybe<TGameEntityResponse>;
  updateHome?: Maybe<THomeEntityResponse>;
  updateOrder?: Maybe<TOrderEntityResponse>;
  updatePlatform?: Maybe<TPlatformEntityResponse>;
  updatePublisher?: Maybe<TPublisherEntityResponse>;
  updateRecommended?: Maybe<TRecommendedEntityResponse>;
  updateUploadFile?: Maybe<TUploadFileEntityResponse>;
  updateUploadFolder?: Maybe<TUploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<TUsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: TUsersPermissionsUserEntityResponse;
  updateWishlist?: Maybe<TWishlistEntityResponse>;
  upload: TUploadFileEntityResponse;
};

export type TMutationCreateBannerArgs = {
  data: TBannerInput;
};

export type TMutationCreateCategoryArgs = {
  data: TCategoryInput;
};

export type TMutationCreateDeveloperArgs = {
  data: TDeveloperInput;
};

export type TMutationCreateEmailDesignerEmailTemplateArgs = {
  data: TEmailDesignerEmailTemplateInput;
};

export type TMutationCreateGameArgs = {
  data: TGameInput;
};

export type TMutationCreateOrderArgs = {
  data: TOrderInput;
};

export type TMutationCreatePlatformArgs = {
  data: TPlatformInput;
};

export type TMutationCreatePublisherArgs = {
  data: TPublisherInput;
};

export type TMutationCreateUploadFileArgs = {
  data: TUploadFileInput;
};

export type TMutationCreateUploadFolderArgs = {
  data: TUploadFolderInput;
};

export type TMutationCreateUsersPermissionsRoleArgs = {
  data: TUsersPermissionsRoleInput;
};

export type TMutationCreateUsersPermissionsUserArgs = {
  data: TUsersPermissionsUserInput;
};

export type TMutationCreateWishlistArgs = {
  data: TWishlistCreateInput;
};

export type TMutationDeleteBannerArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteDeveloperArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteEmailDesignerEmailTemplateArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteGameArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteOrderArgs = {
  id: Scalars['ID'];
};

export type TMutationDeletePlatformArgs = {
  id: Scalars['ID'];
};

export type TMutationDeletePublisherArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};

export type TMutationDeleteWishlistArgs = {
  id: Scalars['ID'];
};

export type TMutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type TMutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type TMutationLoginArgs = {
  input: TUsersPermissionsLoginInput;
};

export type TMutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type TMutationRegisterArgs = {
  input: TUsersPermissionsRegisterInput;
};

export type TMutationRemoveFileArgs = {
  id: Scalars['ID'];
};

export type TMutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type TMutationUpdateBannerArgs = {
  data: TBannerInput;
  id: Scalars['ID'];
};

export type TMutationUpdateCategoryArgs = {
  data: TCategoryInput;
  id: Scalars['ID'];
};

export type TMutationUpdateDeveloperArgs = {
  data: TDeveloperInput;
  id: Scalars['ID'];
};

export type TMutationUpdateEmailDesignerEmailTemplateArgs = {
  data: TEmailDesignerEmailTemplateInput;
  id: Scalars['ID'];
};

export type TMutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<TFileInfoInput>;
};

export type TMutationUpdateGameArgs = {
  data: TGameInput;
  id: Scalars['ID'];
};

export type TMutationUpdateHomeArgs = {
  data: THomeInput;
};

export type TMutationUpdateOrderArgs = {
  data: TOrderInput;
  id: Scalars['ID'];
};

export type TMutationUpdatePlatformArgs = {
  data: TPlatformInput;
  id: Scalars['ID'];
};

export type TMutationUpdatePublisherArgs = {
  data: TPublisherInput;
  id: Scalars['ID'];
};

export type TMutationUpdateRecommendedArgs = {
  data: TRecommendedInput;
};

export type TMutationUpdateUploadFileArgs = {
  data: TUploadFileInput;
  id: Scalars['ID'];
};

export type TMutationUpdateUploadFolderArgs = {
  data: TUploadFolderInput;
  id: Scalars['ID'];
};

export type TMutationUpdateUsersPermissionsRoleArgs = {
  data: TUsersPermissionsRoleInput;
  id: Scalars['ID'];
};

export type TMutationUpdateUsersPermissionsUserArgs = {
  data: TUsersPermissionsUserInput;
  id: Scalars['ID'];
};

export type TMutationUpdateWishlistArgs = {
  data: TWishlistInput;
  id: Scalars['ID'];
};

export type TMutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<TFileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type TOrder = {
  card_brand?: Maybe<Scalars['String']>;
  card_last4?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  games?: Maybe<TGameRelationResponseCollection>;
  payment_intent_id?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  total_in_cents: Scalars['Long'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<TUsersPermissionsUserEntityResponse>;
};

export type TOrderGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TOrderEntity = {
  attributes: TOrder;
  id: Scalars['ID'];
};

export type TOrderEntityResponse = {
  data: TOrderEntity;
};

export type TOrderEntityResponseCollection = {
  data: Array<TOrderEntity>;
  meta: TResponseCollectionMeta;
};

export type TOrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TOrderFiltersInput>>>;
  card_brand?: InputMaybe<TStringFilterInput>;
  card_last4?: InputMaybe<TStringFilterInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  games?: InputMaybe<TGameFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  not?: InputMaybe<TOrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TOrderFiltersInput>>>;
  payment_intent_id?: InputMaybe<TStringFilterInput>;
  publishedAt?: InputMaybe<TDateTimeFilterInput>;
  total_in_cents?: InputMaybe<TLongFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
  user?: InputMaybe<TUsersPermissionsUserFiltersInput>;
};

export type TOrderInput = {
  card_brand?: InputMaybe<Scalars['String']>;
  card_last4?: InputMaybe<Scalars['String']>;
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  payment_intent_id?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  total_in_cents?: InputMaybe<Scalars['Long']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type TPagination = {
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type TPaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type TPlatform = {
  createdAt?: Maybe<Scalars['DateTime']>;
  games?: Maybe<TGameRelationResponseCollection>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TPlatformGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TPlatformEntity = {
  attributes: TPlatform;
  id: Scalars['ID'];
};

export type TPlatformEntityResponse = {
  data: TPlatformEntity;
};

export type TPlatformEntityResponseCollection = {
  data: Array<TPlatformEntity>;
  meta: TResponseCollectionMeta;
};

export type TPlatformFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TPlatformFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  games?: InputMaybe<TGameFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TPlatformFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TPlatformFiltersInput>>>;
  slug?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TPlatformInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type TPlatformRelationResponseCollection = {
  data: Array<TPlatformEntity>;
};

export enum TPublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type TPublisher = {
  createdAt?: Maybe<Scalars['DateTime']>;
  games?: Maybe<TGameRelationResponseCollection>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TPublisherGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TPublisherEntity = {
  attributes: TPublisher;
  id: Scalars['ID'];
};

export type TPublisherEntityResponse = {
  data: TPublisherEntity;
};

export type TPublisherEntityResponseCollection = {
  data: Array<TPublisherEntity>;
  meta: TResponseCollectionMeta;
};

export type TPublisherFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TPublisherFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  games?: InputMaybe<TGameFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TPublisherFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TPublisherFiltersInput>>>;
  slug?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TPublisherInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type TQuery = {
  banner?: Maybe<TBannerEntityResponse>;
  banners?: Maybe<TBannerEntityResponseCollection>;
  categories?: Maybe<TCategoryEntityResponseCollection>;
  category?: Maybe<TCategoryEntityResponse>;
  developer?: Maybe<TDeveloperEntityResponse>;
  developers?: Maybe<TDeveloperEntityResponseCollection>;
  emailDesignerEmailTemplate?: Maybe<TEmailDesignerEmailTemplateEntityResponse>;
  emailDesignerEmailTemplates?: Maybe<TEmailDesignerEmailTemplateEntityResponseCollection>;
  game?: Maybe<TGameEntityResponse>;
  games?: Maybe<TGameEntityResponseCollection>;
  home?: Maybe<THomeEntityResponse>;
  me?: Maybe<TUsersPermissionsMe>;
  order?: Maybe<TOrderEntityResponse>;
  orders?: Maybe<TOrderEntityResponseCollection>;
  platform?: Maybe<TPlatformEntityResponse>;
  platforms?: Maybe<TPlatformEntityResponseCollection>;
  publisher?: Maybe<TPublisherEntityResponse>;
  publishers?: Maybe<TPublisherEntityResponseCollection>;
  recommended?: Maybe<TRecommendedEntityResponse>;
  uploadFile?: Maybe<TUploadFileEntityResponse>;
  uploadFiles?: Maybe<TUploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<TUploadFolderEntityResponse>;
  uploadFolders?: Maybe<TUploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<TUsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<TUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<TUsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<TUsersPermissionsUserEntityResponseCollection>;
  wishlist?: Maybe<TWishlistEntityResponse>;
  wishlists?: Maybe<TWishlistEntityResponseCollection>;
};

export type TQueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryBannersArgs = {
  filters?: InputMaybe<TBannerFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryCategoriesArgs = {
  filters?: InputMaybe<TCategoryFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryDeveloperArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryDevelopersArgs = {
  filters?: InputMaybe<TDeveloperFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryEmailDesignerEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryEmailDesignerEmailTemplatesArgs = {
  filters?: InputMaybe<TEmailDesignerEmailTemplateFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryGameArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryOrdersArgs = {
  filters?: InputMaybe<TOrderFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  publicationState?: InputMaybe<TPublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryPlatformArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryPlatformsArgs = {
  filters?: InputMaybe<TPlatformFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryPublisherArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryPublishersArgs = {
  filters?: InputMaybe<TPublisherFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryUploadFilesArgs = {
  filters?: InputMaybe<TUploadFileFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryUploadFoldersArgs = {
  filters?: InputMaybe<TUploadFolderFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<TUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<TUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TQueryWishlistArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TQueryWishlistsArgs = {
  filters?: InputMaybe<TWishlistFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TRecommended = {
  createdAt?: Maybe<Scalars['DateTime']>;
  section: TComponentPagePopularGames;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TRecommendedEntity = {
  attributes: TRecommended;
  id: Scalars['ID'];
};

export type TRecommendedEntityResponse = {
  data: TRecommendedEntity;
};

export type TRecommendedInput = {
  section?: InputMaybe<TComponentPagePopularGamesInput>;
};

export type TResponseCollectionMeta = {
  pagination: TPagination;
};

export type TStringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<TStringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TUploadFile = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<TGenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type TUploadFileEntity = {
  attributes: TUploadFile;
  id: Scalars['ID'];
};

export type TUploadFileEntityResponse = {
  data: TUploadFileEntity;
};

export type TUploadFileEntityResponseCollection = {
  data: Array<TUploadFileEntity>;
  meta: TResponseCollectionMeta;
};

export type TUploadFileFiltersInput = {
  alternativeText?: InputMaybe<TStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TUploadFileFiltersInput>>>;
  caption?: InputMaybe<TStringFilterInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  ext?: InputMaybe<TStringFilterInput>;
  folder?: InputMaybe<TUploadFolderFiltersInput>;
  folderPath?: InputMaybe<TStringFilterInput>;
  formats?: InputMaybe<TJsonFilterInput>;
  hash?: InputMaybe<TStringFilterInput>;
  height?: InputMaybe<TIntFilterInput>;
  id?: InputMaybe<TIdFilterInput>;
  mime?: InputMaybe<TStringFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TUploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TUploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<TStringFilterInput>;
  provider?: InputMaybe<TStringFilterInput>;
  provider_metadata?: InputMaybe<TJsonFilterInput>;
  size?: InputMaybe<TFloatFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
  url?: InputMaybe<TStringFilterInput>;
  width?: InputMaybe<TIntFilterInput>;
};

export type TUploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type TUploadFileRelationResponseCollection = {
  data: Array<TUploadFileEntity>;
};

export type TUploadFolder = {
  children?: Maybe<TUploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<TUploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<TUploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TUploadFolderChildrenArgs = {
  filters?: InputMaybe<TUploadFolderFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TUploadFolderFilesArgs = {
  filters?: InputMaybe<TUploadFileFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TUploadFolderEntity = {
  attributes: TUploadFolder;
  id: Scalars['ID'];
};

export type TUploadFolderEntityResponse = {
  data: TUploadFolderEntity;
};

export type TUploadFolderEntityResponseCollection = {
  data: Array<TUploadFolderEntity>;
  meta: TResponseCollectionMeta;
};

export type TUploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TUploadFolderFiltersInput>>>;
  children?: InputMaybe<TUploadFolderFiltersInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  files?: InputMaybe<TUploadFileFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TUploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TUploadFolderFiltersInput>>>;
  parent?: InputMaybe<TUploadFolderFiltersInput>;
  path?: InputMaybe<TStringFilterInput>;
  pathId?: InputMaybe<TIntFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TUploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type TUploadFolderRelationResponseCollection = {
  data: Array<TUploadFolderEntity>;
};

export type TUsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean'];
};

export type TUsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean'];
};

export type TUsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type TUsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']>;
  user: TUsersPermissionsMe;
};

export type TUsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<TUsersPermissionsMeRole>;
  username: Scalars['String'];
  wishlists?: Maybe<TWishlistEntityResponseCollection>;
};

export type TUsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type TUsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean'];
};

export type TUsersPermissionsPermission = {
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<TUsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TUsersPermissionsPermissionEntity = {
  attributes: TUsersPermissionsPermission;
  id: Scalars['ID'];
};

export type TUsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<TStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TUsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  id?: InputMaybe<TIdFilterInput>;
  not?: InputMaybe<TUsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TUsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<TUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
};

export type TUsersPermissionsPermissionRelationResponseCollection = {
  data: Array<TUsersPermissionsPermissionEntity>;
};

export type TUsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type TUsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<TUsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<TUsersPermissionsUserRelationResponseCollection>;
};

export type TUsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<TUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TUsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<TUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TUsersPermissionsRoleEntity = {
  attributes: TUsersPermissionsRole;
  id: Scalars['ID'];
};

export type TUsersPermissionsRoleEntityResponse = {
  data: TUsersPermissionsRoleEntity;
};

export type TUsersPermissionsRoleEntityResponseCollection = {
  data: Array<TUsersPermissionsRoleEntity>;
  meta: TResponseCollectionMeta;
};

export type TUsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TUsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  description?: InputMaybe<TStringFilterInput>;
  id?: InputMaybe<TIdFilterInput>;
  name?: InputMaybe<TStringFilterInput>;
  not?: InputMaybe<TUsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TUsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<TUsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<TStringFilterInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
  users?: InputMaybe<TUsersPermissionsUserFiltersInput>;
};

export type TUsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TUsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean'];
};

export type TUsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<TUsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type TUsersPermissionsUserEntity = {
  attributes: TUsersPermissionsUser;
  id: Scalars['ID'];
};

export type TUsersPermissionsUserEntityResponse = {
  data: TUsersPermissionsUserEntity;
};

export type TUsersPermissionsUserEntityResponseCollection = {
  data: Array<TUsersPermissionsUserEntity>;
  meta: TResponseCollectionMeta;
};

export type TUsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TUsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<TBooleanFilterInput>;
  confirmationToken?: InputMaybe<TStringFilterInput>;
  confirmed?: InputMaybe<TBooleanFilterInput>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  email?: InputMaybe<TStringFilterInput>;
  id?: InputMaybe<TIdFilterInput>;
  not?: InputMaybe<TUsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TUsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<TStringFilterInput>;
  provider?: InputMaybe<TStringFilterInput>;
  resetPasswordToken?: InputMaybe<TStringFilterInput>;
  role?: InputMaybe<TUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
  username?: InputMaybe<TStringFilterInput>;
};

export type TUsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type TUsersPermissionsUserRelationResponseCollection = {
  data: Array<TUsersPermissionsUserEntity>;
};

export type TWishlist = {
  createdAt?: Maybe<Scalars['DateTime']>;
  games?: Maybe<TGameRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<TUsersPermissionsUserEntityResponse>;
};

export type TWishlistGamesArgs = {
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TWishlistCreateInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TWishlistEntity = {
  attributes: TWishlist;
  id: Scalars['ID'];
};

export type TWishlistEntityResponse = {
  data: TWishlistEntity;
};

export type TWishlistEntityResponseCollection = {
  data: Array<TWishlistEntity>;
  meta: TResponseCollectionMeta;
};

export type TWishlistFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TWishlistFiltersInput>>>;
  createdAt?: InputMaybe<TDateTimeFilterInput>;
  games?: InputMaybe<TGameFiltersInput>;
  id?: InputMaybe<TIdFilterInput>;
  not?: InputMaybe<TWishlistFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TWishlistFiltersInput>>>;
  updatedAt?: InputMaybe<TDateTimeFilterInput>;
  user?: InputMaybe<TUsersPermissionsUserFiltersInput>;
};

export type TWishlistInput = {
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  user?: InputMaybe<Scalars['ID']>;
};

export type TBannerFragment = {
  title: string;
  subtitle: string;
  image: { data: { attributes: { url: string } } };
  button: { label: string; link: string };
  ribbon?: { text: string; color?: TEnum_Componentpageribbon_Color | null; size?: TEnum_Componentpageribbon_Size | null } | null;
};

export type TGameFragment = {
  name: string;
  slug: string;
  price: number;
  cover: { data: { attributes: { url: string } } };
  developers?: { data: Array<{ attributes: { name: string } }> } | null;
};

export type TGamesFragment = {
  data: Array<{
    id: string;
    attributes: {
      name: string;
      slug: string;
      price: number;
      cover: { data: { attributes: { url: string } } };
      developers?: { data: Array<{ attributes: { name: string } }> } | null;
    };
  }>;
};

export type THighlightFragment = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: TEnum_Componentpagehighlight_Alignment | null;
  background: { data: { attributes: { url: string } } };
  floatImage?: { data: { attributes: { url: string } } } | null;
};

export type TMutationRegisterVariables = Exact<{
  input: TUsersPermissionsRegisterInput;
}>;

export type TMutationRegister = { register: { jwt?: string | null } };

export type TMutationCreateWishlistVariables = Exact<{
  input: TWishlistCreateInput;
}>;

export type TMutationCreateWishlist = {
  createWishlist?: {
    data: {
      id: string;
      attributes: {
        games?: {
          data: Array<{
            id: string;
            attributes: {
              name: string;
              slug: string;
              price: number;
              cover: { data: { attributes: { url: string } } };
              developers?: { data: Array<{ attributes: { name: string } }> } | null;
            };
          }>;
        } | null;
        user?: { data: { id: string; attributes: { username: string } } } | null;
      };
    };
  } | null;
};

export type TMutationUpdateWishlistVariables = Exact<{
  id: Scalars['ID'];
  input: TWishlistInput;
}>;

export type TMutationUpdateWishlist = {
  updateWishlist?: {
    data: {
      id: string;
      attributes: {
        games?: {
          data: Array<{
            id: string;
            attributes: {
              name: string;
              slug: string;
              price: number;
              cover: { data: { attributes: { url: string } } };
              developers?: { data: Array<{ attributes: { name: string } }> } | null;
            };
          }>;
        } | null;
        user?: { data: { id: string; attributes: { username: string } } } | null;
      };
    };
  } | null;
};

export type TQueryGamesVariables = Exact<{
  filters?: InputMaybe<TGameFiltersInput>;
  pagination?: InputMaybe<TPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;

export type TQueryGames = {
  games?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
        slug: string;
        price: number;
        cover: { data: { attributes: { url: string } } };
        developers?: { data: Array<{ attributes: { name: string } }> } | null;
      };
    }>;
    meta: { pagination: { total: number; page: number; pageSize: number; pageCount: number } };
  } | null;
};

export type TQueryGameBySlugVariables = Exact<{
  slug: Scalars['String'];
}>;

export type TQueryGameBySlug = {
  games?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
        short_description: string;
        description: string;
        price: number;
        rating?: TEnum_Game_Rating | null;
        release_date?: any | null;
        gallery?: { data: Array<{ attributes: { src: string; label?: string | null } }> } | null;
        cover: { data: { attributes: { src: string } } };
        developers?: { data: Array<{ attributes: { name: string } }> } | null;
        publisher?: { data: { attributes: { name: string } } } | null;
        categories?: { data: Array<{ attributes: { name: string } }> } | null;
        platforms?: { data: Array<{ attributes: { name: string } }> } | null;
      };
    }>;
  } | null;
};

export type TQueryHomeVariables = Exact<{
  date: Scalars['Date'];
}>;

export type TQueryHome = {
  banners?: {
    data: Array<{
      id: string;
      attributes: {
        title: string;
        subtitle: string;
        image: { data: { attributes: { url: string } } };
        button: { label: string; link: string };
        ribbon?: { text: string; color?: TEnum_Componentpageribbon_Color | null; size?: TEnum_Componentpageribbon_Size | null } | null;
      };
    }>;
  } | null;
  newGames?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
        slug: string;
        price: number;
        cover: { data: { attributes: { url: string } } };
        developers?: { data: Array<{ attributes: { name: string } }> } | null;
      };
    }>;
  } | null;
  upcomingGames?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
        slug: string;
        price: number;
        cover: { data: { attributes: { url: string } } };
        developers?: { data: Array<{ attributes: { name: string } }> } | null;
      };
    }>;
  } | null;
  freeGames?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
        slug: string;
        price: number;
        cover: { data: { attributes: { url: string } } };
        developers?: { data: Array<{ attributes: { name: string } }> } | null;
      };
    }>;
  } | null;
  sections?: {
    data: {
      attributes: {
        newGames?: {
          title?: string | null;
          highlight?: {
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            alignment?: TEnum_Componentpagehighlight_Alignment | null;
            background: { data: { attributes: { url: string } } };
            floatImage?: { data: { attributes: { url: string } } } | null;
          } | null;
        } | null;
        popularGames?: {
          title: string;
          highlight?: {
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            alignment?: TEnum_Componentpagehighlight_Alignment | null;
            background: { data: { attributes: { url: string } } };
            floatImage?: { data: { attributes: { url: string } } } | null;
          } | null;
          games?: {
            data: Array<{
              id: string;
              attributes: {
                name: string;
                slug: string;
                price: number;
                cover: { data: { attributes: { url: string } } };
                developers?: { data: Array<{ attributes: { name: string } }> } | null;
              };
            }>;
          } | null;
        } | null;
        upcomingGames?: {
          title?: string | null;
          highlight?: {
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            alignment?: TEnum_Componentpagehighlight_Alignment | null;
            background: { data: { attributes: { url: string } } };
            floatImage?: { data: { attributes: { url: string } } } | null;
          } | null;
        } | null;
        freeGames?: {
          title?: string | null;
          highlight?: {
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            alignment?: TEnum_Componentpagehighlight_Alignment | null;
            background: { data: { attributes: { url: string } } };
            floatImage?: { data: { attributes: { url: string } } } | null;
          } | null;
        } | null;
      };
    };
  } | null;
};

export type TQueryOrdersVariables = Exact<{
  identifier: Scalars['ID'];
}>;

export type TQueryOrders = {
  orders?: {
    data: Array<{
      id: string;
      attributes: {
        createdAt?: any | null;
        card_brand?: string | null;
        card_last4?: string | null;
        games?: {
          data: Array<{
            id: string;
            attributes: {
              name: string;
              slug: string;
              price: number;
              cover: { data: { attributes: { url: string } } };
              developers?: { data: Array<{ attributes: { name: string } }> } | null;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};

export type TQueryProfileMeVariables = Exact<{
  identifier: Scalars['ID'];
}>;

export type TQueryProfileMe = { usersPermissionsUser?: { data: { id: string; attributes: { username: string; email: string } } } | null };

export type TQueryRecommendedVariables = Exact<{ [key: string]: never }>;

export type TQueryRecommended = {
  recommended?: {
    data: {
      attributes: {
        section: {
          title: string;
          highlight?: {
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            alignment?: TEnum_Componentpagehighlight_Alignment | null;
            background: { data: { attributes: { url: string } } };
            floatImage?: { data: { attributes: { url: string } } } | null;
          } | null;
          games?: {
            data: Array<{
              id: string;
              attributes: {
                name: string;
                slug: string;
                price: number;
                cover: { data: { attributes: { url: string } } };
                developers?: { data: Array<{ attributes: { name: string } }> } | null;
              };
            }>;
          } | null;
        };
      };
    };
  } | null;
};

export type TQueryUpcomingVariables = Exact<{
  date: Scalars['Date'];
}>;

export type TQueryUpcoming = {
  upcomingGames?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
        slug: string;
        price: number;
        cover: { data: { attributes: { url: string } } };
        developers?: { data: Array<{ attributes: { name: string } }> } | null;
      };
    }>;
  } | null;
  showcase?: {
    data: {
      attributes: {
        upcomingGames?: {
          title?: string | null;
          highlight?: {
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            alignment?: TEnum_Componentpagehighlight_Alignment | null;
            background: { data: { attributes: { url: string } } };
            floatImage?: { data: { attributes: { url: string } } } | null;
          } | null;
        } | null;
      };
    };
  } | null;
};

export type TQueryWishlistVariables = Exact<{ [key: string]: never }>;

export type TQueryWishlist = {
  me?: {
    wishlists?: {
      data: Array<{
        id: string;
        attributes: {
          games?: {
            data: Array<{
              id: string;
              attributes: {
                name: string;
                slug: string;
                price: number;
                cover: { data: { attributes: { url: string } } };
                developers?: { data: Array<{ attributes: { name: string } }> } | null;
              };
            }>;
          } | null;
        };
      }>;
    } | null;
  } | null;
};

export type TMutationRegisterMutationFn = Apollo.MutationFunction<TMutationRegister, TMutationRegisterVariables>;

/**
 * __useMutationRegister__
 *
 * To run a mutation, you first call `useMutationRegister` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationRegister` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationRegister, { data, loading, error }] = useMutationRegister({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationRegister(baseOptions?: Apollo.MutationHookOptions<TMutationRegister, TMutationRegisterVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TMutationRegister, TMutationRegisterVariables>(Operations.MutationRegister, options);
}
export type MutationRegisterHookResult = ReturnType<typeof useMutationRegister>;
export type MutationRegisterMutationResult = Apollo.MutationResult<TMutationRegister>;
export type MutationRegisterMutationOptions = Apollo.BaseMutationOptions<TMutationRegister, TMutationRegisterVariables>;
export type TMutationCreateWishlistMutationFn = Apollo.MutationFunction<TMutationCreateWishlist, TMutationCreateWishlistVariables>;

/**
 * __useMutationCreateWishlist__
 *
 * To run a mutation, you first call `useMutationCreateWishlist` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationCreateWishlist` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationCreateWishlist, { data, loading, error }] = useMutationCreateWishlist({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationCreateWishlist(
  baseOptions?: Apollo.MutationHookOptions<TMutationCreateWishlist, TMutationCreateWishlistVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TMutationCreateWishlist, TMutationCreateWishlistVariables>(Operations.MutationCreateWishlist, options);
}
export type MutationCreateWishlistHookResult = ReturnType<typeof useMutationCreateWishlist>;
export type MutationCreateWishlistMutationResult = Apollo.MutationResult<TMutationCreateWishlist>;
export type MutationCreateWishlistMutationOptions = Apollo.BaseMutationOptions<TMutationCreateWishlist, TMutationCreateWishlistVariables>;
export type TMutationUpdateWishlistMutationFn = Apollo.MutationFunction<TMutationUpdateWishlist, TMutationUpdateWishlistVariables>;

/**
 * __useMutationUpdateWishlist__
 *
 * To run a mutation, you first call `useMutationUpdateWishlist` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationUpdateWishlist` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationUpdateWishlist, { data, loading, error }] = useMutationUpdateWishlist({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationUpdateWishlist(
  baseOptions?: Apollo.MutationHookOptions<TMutationUpdateWishlist, TMutationUpdateWishlistVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TMutationUpdateWishlist, TMutationUpdateWishlistVariables>(Operations.MutationUpdateWishlist, options);
}
export type MutationUpdateWishlistHookResult = ReturnType<typeof useMutationUpdateWishlist>;
export type MutationUpdateWishlistMutationResult = Apollo.MutationResult<TMutationUpdateWishlist>;
export type MutationUpdateWishlistMutationOptions = Apollo.BaseMutationOptions<TMutationUpdateWishlist, TMutationUpdateWishlistVariables>;

/**
 * __useQueryGames__
 *
 * To run a query within a React component, call `useQueryGames` and pass it any options that fit your needs.
 * When your component renders, `useQueryGames` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryGames({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useQueryGames(baseOptions?: Apollo.QueryHookOptions<TQueryGames, TQueryGamesVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryGames, TQueryGamesVariables>(Operations.QueryGames, options);
}
export function useQueryGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryGames, TQueryGamesVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryGames, TQueryGamesVariables>(Operations.QueryGames, options);
}
export type QueryGamesHookResult = ReturnType<typeof useQueryGames>;
export type QueryGamesLazyQueryHookResult = ReturnType<typeof useQueryGamesLazyQuery>;
export type QueryGamesQueryResult = Apollo.QueryResult<TQueryGames, TQueryGamesVariables>;

/**
 * __useQueryGameBySlug__
 *
 * To run a query within a React component, call `useQueryGameBySlug` and pass it any options that fit your needs.
 * When your component renders, `useQueryGameBySlug` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryGameBySlug({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQueryGameBySlug(baseOptions: Apollo.QueryHookOptions<TQueryGameBySlug, TQueryGameBySlugVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryGameBySlug, TQueryGameBySlugVariables>(Operations.QueryGameBySlug, options);
}
export function useQueryGameBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryGameBySlug, TQueryGameBySlugVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryGameBySlug, TQueryGameBySlugVariables>(Operations.QueryGameBySlug, options);
}
export type QueryGameBySlugHookResult = ReturnType<typeof useQueryGameBySlug>;
export type QueryGameBySlugLazyQueryHookResult = ReturnType<typeof useQueryGameBySlugLazyQuery>;
export type QueryGameBySlugQueryResult = Apollo.QueryResult<TQueryGameBySlug, TQueryGameBySlugVariables>;

/**
 * __useQueryHome__
 *
 * To run a query within a React component, call `useQueryHome` and pass it any options that fit your needs.
 * When your component renders, `useQueryHome` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryHome({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useQueryHome(baseOptions: Apollo.QueryHookOptions<TQueryHome, TQueryHomeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryHome, TQueryHomeVariables>(Operations.QueryHome, options);
}
export function useQueryHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryHome, TQueryHomeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryHome, TQueryHomeVariables>(Operations.QueryHome, options);
}
export type QueryHomeHookResult = ReturnType<typeof useQueryHome>;
export type QueryHomeLazyQueryHookResult = ReturnType<typeof useQueryHomeLazyQuery>;
export type QueryHomeQueryResult = Apollo.QueryResult<TQueryHome, TQueryHomeVariables>;

/**
 * __useQueryOrders__
 *
 * To run a query within a React component, call `useQueryOrders` and pass it any options that fit your needs.
 * When your component renders, `useQueryOrders` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryOrders({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useQueryOrders(baseOptions: Apollo.QueryHookOptions<TQueryOrders, TQueryOrdersVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryOrders, TQueryOrdersVariables>(Operations.QueryOrders, options);
}
export function useQueryOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryOrders, TQueryOrdersVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryOrders, TQueryOrdersVariables>(Operations.QueryOrders, options);
}
export type QueryOrdersHookResult = ReturnType<typeof useQueryOrders>;
export type QueryOrdersLazyQueryHookResult = ReturnType<typeof useQueryOrdersLazyQuery>;
export type QueryOrdersQueryResult = Apollo.QueryResult<TQueryOrders, TQueryOrdersVariables>;

/**
 * __useQueryProfileMe__
 *
 * To run a query within a React component, call `useQueryProfileMe` and pass it any options that fit your needs.
 * When your component renders, `useQueryProfileMe` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryProfileMe({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useQueryProfileMe(baseOptions: Apollo.QueryHookOptions<TQueryProfileMe, TQueryProfileMeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryProfileMe, TQueryProfileMeVariables>(Operations.QueryProfileMe, options);
}
export function useQueryProfileMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryProfileMe, TQueryProfileMeVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryProfileMe, TQueryProfileMeVariables>(Operations.QueryProfileMe, options);
}
export type QueryProfileMeHookResult = ReturnType<typeof useQueryProfileMe>;
export type QueryProfileMeLazyQueryHookResult = ReturnType<typeof useQueryProfileMeLazyQuery>;
export type QueryProfileMeQueryResult = Apollo.QueryResult<TQueryProfileMe, TQueryProfileMeVariables>;

/**
 * __useQueryRecommended__
 *
 * To run a query within a React component, call `useQueryRecommended` and pass it any options that fit your needs.
 * When your component renders, `useQueryRecommended` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryRecommended({
 *   variables: {
 *   },
 * });
 */
export function useQueryRecommended(baseOptions?: Apollo.QueryHookOptions<TQueryRecommended, TQueryRecommendedVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryRecommended, TQueryRecommendedVariables>(Operations.QueryRecommended, options);
}
export function useQueryRecommendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryRecommended, TQueryRecommendedVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryRecommended, TQueryRecommendedVariables>(Operations.QueryRecommended, options);
}
export type QueryRecommendedHookResult = ReturnType<typeof useQueryRecommended>;
export type QueryRecommendedLazyQueryHookResult = ReturnType<typeof useQueryRecommendedLazyQuery>;
export type QueryRecommendedQueryResult = Apollo.QueryResult<TQueryRecommended, TQueryRecommendedVariables>;

/**
 * __useQueryUpcoming__
 *
 * To run a query within a React component, call `useQueryUpcoming` and pass it any options that fit your needs.
 * When your component renders, `useQueryUpcoming` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUpcoming({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useQueryUpcoming(baseOptions: Apollo.QueryHookOptions<TQueryUpcoming, TQueryUpcomingVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryUpcoming, TQueryUpcomingVariables>(Operations.QueryUpcoming, options);
}
export function useQueryUpcomingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryUpcoming, TQueryUpcomingVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryUpcoming, TQueryUpcomingVariables>(Operations.QueryUpcoming, options);
}
export type QueryUpcomingHookResult = ReturnType<typeof useQueryUpcoming>;
export type QueryUpcomingLazyQueryHookResult = ReturnType<typeof useQueryUpcomingLazyQuery>;
export type QueryUpcomingQueryResult = Apollo.QueryResult<TQueryUpcoming, TQueryUpcomingVariables>;

/**
 * __useQueryWishlist__
 *
 * To run a query within a React component, call `useQueryWishlist` and pass it any options that fit your needs.
 * When your component renders, `useQueryWishlist` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryWishlist({
 *   variables: {
 *   },
 * });
 */
export function useQueryWishlist(baseOptions?: Apollo.QueryHookOptions<TQueryWishlist, TQueryWishlistVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TQueryWishlist, TQueryWishlistVariables>(Operations.QueryWishlist, options);
}
export function useQueryWishlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TQueryWishlist, TQueryWishlistVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TQueryWishlist, TQueryWishlistVariables>(Operations.QueryWishlist, options);
}
export type QueryWishlistHookResult = ReturnType<typeof useQueryWishlist>;
export type QueryWishlistLazyQueryHookResult = ReturnType<typeof useQueryWishlistLazyQuery>;
export type QueryWishlistQueryResult = Apollo.QueryResult<TQueryWishlist, TQueryWishlistVariables>;
