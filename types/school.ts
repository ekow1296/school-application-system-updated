export interface School {
  id: number | string;
  name: string;
  location: string;
  programs?: string[];
  tuition?: string;
  acceptanceRate?: string;
  rating?: number;
  image?: string;
  website?: string;
  country?: string;
  'state-province'?: string;
  attendanceMode?: string;
  studyFormat?: string;
}