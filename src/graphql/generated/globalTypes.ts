/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = "left",
  right = "right",
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = "primary",
  secondary = "secondary",
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = "normal",
  small = "small",
}

export enum ENUM_GAME_RATING {
  br_0 = "br_0",
  br_10 = "br_10",
  br_12 = "br_12",
  br_14 = "br_14",
  br_16 = "br_16",
  br_18 = "br_18",
  free = "free",
}

export interface InputID {
  id: string;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface WishlistInput {
  user?: string | null;
  games?: (string | null)[] | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface createWishlistInput {
  data?: WishlistInput | null;
}

export interface editWishlistInput {
  user?: string | null;
  games?: (string | null)[] | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateWishlistInput {
  where?: InputID | null;
  data?: editWishlistInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
