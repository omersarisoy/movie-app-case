
export interface StateHead {
    data: DetailType[] | null;
    total: string;
    detail: DetailType | null;
    seasonsData: SeasonsOutput | null;
    filter: FilterItem[];
    loading: boolean;
    error: string;
} 
export interface FilterItem {
    type: string;
    value: string | number;
  }
export interface DetailType {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string; 
    Poster: string;
    Rated: string;
    Ratings: {Source:string;Value:string}[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
    totalSeasons: string;
  }

  export interface SeasonsOutput {
    Episodes: {Title: string; Released: string;Episode: string;imdbRating: string;imdbID: string}[];
    Response: string;
    Season: string;
    Title: string;
    totalSeasons: string;
  }

  export interface PaginationProps {
    startPage: number;
    endPage: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type ButtonProps = {
  className?: string;
  type?: "submit" | "button";
  outline?: boolean;
  children: string | React.ReactNode | React.ReactNode[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};