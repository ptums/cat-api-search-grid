/**
 *  This is the main type for the data coming in from the API call
 */
export interface Breed {
  id: string;
  description: string;
  name: string;
  affection_level:number;
  image: {
    id?: string;
    url: string
  }
  url?:string
}
