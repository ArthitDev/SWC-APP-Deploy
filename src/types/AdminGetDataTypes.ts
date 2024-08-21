export type WoundData = {
  id: number;
  wound_name: string;
  wound_content: string;
  wound_cover: string | null;
};

export type ArticleData = {
  id: number;
  articlesName: string;
  articlesContent: string;
};

export type TrickData = {
  id: number;
  trick_name: string;
  trick_content: string;
};

export type DidyouknowData = {
  id: number;
  didyouknow_name: string;
  didyouknow_content: string;
};
