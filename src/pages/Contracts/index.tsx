import type { TableProps } from 'antd';
import { Button, Input, Space, Table, Tag } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  status: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((stat) => {
          const color = stat === 'ativo' ? 'green' : 'volcano';
          return (
            <Tag key={stat} color={color}>
              {stat.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Prefeitura de Itaiupulândia',
    age: 32,
    address: 'New York No. 1 Lake Park',
    status: ['ativo'],
  },
  {
    key: '2',
    name: 'Prefeitura de Piên',
    age: 42,
    address: 'London No. 1 Lake Park',
    status: ['Inativo'],
  },
  {
    key: '3',
    name: 'Prefeitura de Mafra',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    status: ['ativo'],
  },
];

const Contracts: React.FC = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded-lg">
        <div className="flex gap-x-4 justify-end mb-4">
          <Input placeholder="Basic usage" className="max-w-72" />
          <Button>Adicionar Instituição</Button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Contracts;
