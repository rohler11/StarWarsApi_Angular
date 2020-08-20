export interface Person {
  name: string;
  homeowrld: string;
  films: string[];
}

export interface People {
  count: number;
  next: string;
  results: Person[];
}
