import { TableRow } from '../TableRow';
import { IPrepareData } from '../../../types';

type TTableBodyProps = {
  data: IPrepareData[];
  parentId?: number;
  level?: number;
};

export const TableBody = ({
  data,
  parentId = 0,
  level = 10,
}: TTableBodyProps) => {
  const items = data.filter((item: IPrepareData) => item.parentId === parentId);

  return (
    <>
      {items.length
        ? items.map((item: IPrepareData) => (
            <TableRow key={item.id} item={item} level={level}>
              <TableBody data={data} parentId={item.id} level={level + 10} />
            </TableRow>
          ))
        : null}
    </>
  );
};
