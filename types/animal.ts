export type Animal = {
  id: number;
  name: string;
  preferred_common_name?: string;
  iconic_taxon_name?: string;
  default_photo?: {
    medium_url: string;
    attribution: string;
  };
  conservation_status?: {
    status: string;
    authority: string;
  };
};

export type Animals = Animal[];
