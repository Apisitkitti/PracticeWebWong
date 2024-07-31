
export interface rightSidebarContent {
  title: string,
  advertise?: ContentTypeInformation;
}

interface ContentTypeInformation {
  ad?: boolean,
  img: string,
  name: string,
  place: string;
}