export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  uploader: string;
  description: string;
}

export interface PlaylistData {
  videos: Video[];
  title: string;
  description: string;
  thumbnailUrl: string;
}