import { Table} from "antd";
import { useState } from "react";

import {ModalForm} from "ModalForm/ModalForm";
import {ContextMenu} from "./ContextMenu/ContextMenu";
import s from "./Grid.module.scss";

// Кастомный рендерер ячейки с поддержкой контекстного меню
const render = (value) => (
  <ContextMenu value={value}>
    <div>{value}</div>
  </ContextMenu>
);

const columns = [
  // Кастомная индексная колонка, ее нет в изначальных данных
  {
    title: '',
    key: 'index',
    render: (text, record, index) => index + 1,
    className: s.indexColumn,
  },
  {
    title: "First name",
    dataIndex: "firstName",
    key: "firstName",
    // Кастомный рендерер привязывается к каждой колонке
    render,
  },
  {
    title: "Last name",
    dataIndex: "lastName",
    key: "lastName",
    render,
  },
  {
    title: "Sex",
    dataIndex: "sex",
    key: "sex",
    render,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    align: "right",
    render,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render,
  }
];

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "2",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "3",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "4",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "5",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "6",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "7",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "8",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "9",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "10",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "11",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "12",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "13",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "14",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "15",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "16",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "17",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "18",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "19",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "20",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "21",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "22",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "23",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "24",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "25",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "26",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "27",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "28",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "29",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "30",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "31",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "32",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "33",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "34",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "35",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "36",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "37",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
  {
    key: "38",
    firstName: "Joan",
    lastName: "Green",
    sex: "female",
    address: "London No. 1 Lake Park",
    age: 42
  },
  {
    key: "39",
    firstName: "Bob",
    lastName: "Yellow",
    sex: "male",
    address: "Sidney No. 1 Lake Park",
    age: 36
  },
  {
    key: "40",
    firstName: "John",
    lastName: "Brown",
    sex: "male",
    address: "New York No. 1 Lake Park",
    age: 32
  },
];

export const Grid = () => {
  const [form, setForm] = useState(false);

  const onRow = () => ({
    onContextMenu() {},
    onDoubleClick() {
      setForm(true);
    },
  });

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        onRow={onRow}
        className={s.grid}
        // Выравнивание пагинации по центру лучше делать встроенными средствами, а не через CSS
        pagination={{position: ["bottomCenter"]}}
      />
      <ModalForm visible={form === true} onClose={() => setForm(false)} />
    </>
  );
}