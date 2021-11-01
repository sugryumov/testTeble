export type TColumns = {
  key: number;
  title: string;
};

export interface IData {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
}

export interface IPrepareData extends IData {
  hasChildren: boolean;
}
