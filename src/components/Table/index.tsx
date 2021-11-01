import { useEffect, useState } from 'react';
import { IData, IPrepareData, TColumns } from '../../types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { prepareData } from '../../utils/prepareData';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableFilter } from './TableFilter';
import './index.scss';

type TTableProps = {
  data: IData[];
  columns: TColumns[];
};

export const Table = ({ data, columns }: TTableProps) => {
  const [localData, setLocalData] = useState<IPrepareData[]>([]);

  const { isActive } = useTypedSelector((state) => state.filter);

  useEffect(() => {
    const result = isActive
      ? data.filter((item: IData) => item.isActive)
      : data;

    setLocalData(prepareData(result));
  }, [data, isActive]);

  return (
    <div className="container">
      <TableFilter />

      <table className="table">
        <thead>
          <TableHeader columns={columns} />
        </thead>
        <tbody>
          <TableBody data={localData} />
        </tbody>
      </table>
    </div>
  );
};
