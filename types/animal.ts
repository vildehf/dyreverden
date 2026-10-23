import { url } from "inspector";

export type Animal = {
  id: number;
  name: string;
  preferred_common_name?: string;
  iconic_taxon_name?: string;
  observations_count?: number;
  wikipedia_url?: string;

  default_photo?: {
    medium_url: string;
    attribution?: string;
    license_code?: string | null;
    url?: string;
  };

  conservation_status?: {
    status: string;
    authority: string;
  };
};

export type Animals = Animal[];
