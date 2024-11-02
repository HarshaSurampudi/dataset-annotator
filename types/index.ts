export interface DPOEntry {
  id: string;
  prompt: string;
  response_a: string;
  response_b: string;
  chosen?: 'a' | 'b';
}

export interface Dataset {
  name: string;
  entries: DPOEntry[];
}