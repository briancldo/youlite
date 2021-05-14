export interface ChannelData {
  channelTitle: string;
  thumbnails: {
    medium: { url: string };
  };
}

export interface VideoData {
  channelData: string;
  title: string;
  description: string;
  thumbnails: {
    medium: { url: string };
  };
}

interface ChanenelSearchResult {
  id: { kind: 'youtube#channel' };
  snippet: ChannelData;
}

interface VideoSearchResult {
  id: { kind: 'youtube#video' };
  snippet: VideoData;
}

export type SearchResult = ChanenelSearchResult | VideoSearchResult;

export interface Playlist {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

interface PlaylistResult {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
}

export interface PlaylistResults {
  items: PlaylistResult[];
}

interface PlaylistVideosResult {
  snippet: {
    resourceId: { videoId: string };
    title: string;
    thumbnails: { medium: { url: string } };
    videoOwnerChannelTitle: string;
    description: string;
  };
}

export interface PlaylistVideosResults {
  items: PlaylistVideosResult[];
}
