import { Playlist } from "../../utils/api.transform.types";
import { Video } from "../../utils/youtube.api.types";

// state

export interface PlaylistState {
  [id: string]: {
    metadata: Playlist;
    videos: Video[];
  };
}

export interface AuthState {
  token?: string;
}

export interface StoreState {
  playlist?: PlaylistState;
  auth?: AuthState;
}

// playlist reducer

export interface CachePlaylistListAction {
  type: "CACHE_PLAYLIST_LIST";
  playlistsData: Playlist[];
}

export interface CachePlaylistVideosAction {
  type: "CACHE_PLAYLIST_VIDEOS";
  playlistId: string;
  videos: Video[];
}

export interface RestorePlaylistsAction {
  type: "RESTORE_PLAYLISTS";
  playlists: PlaylistState;
}

export type PlaylistAction =
  | CachePlaylistListAction
  | CachePlaylistVideosAction
  | RestorePlaylistsAction;

export type PlaylistReducer = (
  state: PlaylistState,
  action: PlaylistAction
) => PlaylistState;

export interface PlaylistReducerCollection {
  [actionType: string]: PlaylistReducer;
}

// auth reducer

export interface SetTokenAction {
  type: "SET_TOKEN";
  token: string;
}

export interface RemoveTokenAction {
  type: "REMOVE_TOKEN";
}

export type AuthAction = SetTokenAction | RemoveTokenAction;

export type AuthReducer = (state: AuthState, action?: AuthAction) => AuthState;

export interface AuthReducerCollection {
  [actionType: string]: AuthReducer;
}

export type StoreAction = PlaylistAction | AuthAction;
