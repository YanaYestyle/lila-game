export interface SectionItem {
  title: string;
  content?: string;
  subheading?: string;
  listContentDetails?: string[];
}

export interface Section {
  title: string;
  content?: string | string[];
  list?: string[];
  items?: SectionItem[];
  footer?: string;
}