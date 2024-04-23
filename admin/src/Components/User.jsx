import React ,{useState}from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Table,  Button, Modal} from 'antd';

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '11',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '12',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '13',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '14',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
  ];
  const options = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", options);
  return (
    <div>
      <div className="heading mb-3">
        <div className="heading-labal">
          <div className="page-name">
            <h1>User</h1>
            <span>{date}</span>
          </div>
          <div className="username d-flex">
            <NotificationsIcon />
            <p className="ms-2">Username</p>
          </div>
        </div>
      </div>
      <div className="model">
      <Button type="primary" onClick={showModal}>
        Add New User
      </Button>
      <Modal title="New User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <input type="text" className="m-2 w-100" placeholder="First Name"/><br/>
      <input type="text" className="m-2 w-100" placeholder="Last Name"/><br/>
      <input type="text" className="m-2 w-100" placeholder="Mobail Number"/><br/>
      <input type="text" className="m-2 w-100" placeholder="Email Address"/><br/>
      <input type="text" className="m-2 w-100" placeholder="Enter Password"/><br/>
      <input type="text" className="m-2 w-100" placeholder="Enter Confirm"/><br/>
      <input type="text" className="m-2 w-100" placeholder="Enter Address"/><br/>
      </Modal>
      </div>
      <div className="user-data">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

export default User;
