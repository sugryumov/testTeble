import { IData, IPrepareData } from '../types';

export const prepareData = (data: IData[]): IPrepareData[] => {
  return data.map((item: IData) => ({
    ...item,
    hasChildren:
      data.filter(({ parentId }: IData) => parentId === item.id).length > 0,
  }));
};
