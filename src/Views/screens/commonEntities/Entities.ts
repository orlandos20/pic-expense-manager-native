export interface OCRTextResponse {
  bounding: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  text: string;
}
