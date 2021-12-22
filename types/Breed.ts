export interface Breed {
  id: string;
  description: string;
  name: string;
  affection_level:number;
  image: {
    id: string;
    url: string
  }
  url?:string
}