import data from '../../data.json';
import { Table } from '../Table';

export const App = () => {
  const columns = [
    {
      key: 1,
      title: 'Name',
    },
    {
      key: 2,
      title: 'Email',
    },
    {
      key: 3,
      title: 'Balance',
    },
    {
      key: 4,
      title: 'isActive',
    },
    {
      key: 5,
      title: '',
    },
  ];

  return <Table data={data} columns={columns} />;
};
