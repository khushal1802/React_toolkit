import "./App.css";
import { Route, Routes } from "react-router-dom";
import FooTwo from "./component/FooTwo";
import FooOne from "./component/FooOne";
import Bar from "./component/Bar";
import Navbar from "./component/Navbar";
import Foor from "./component/Foor";
import { useState } from "react";
import { Button, DatePicker, Input, Space, message } from "antd";
import Search from "antd/es/input/Search";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/foor/" element={<Foor />}>
          <Route path="foor-one" element={<FooOne />} />
          <Route path="foor-two" element={<FooTwo />} />
        </Route>
          <Route path="/bar/*" element={<Bar />} />
      </Routes>
    </div>
  );

  // const [date, setDate] = useState(null);
  // const [Name ,setName]=useState("");
  // const [messageApi, contextHolder] = message.useMessage();
  // const handleChange = (value) => {
  //   messageApi.info(
  //       `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
  //     );
  //     setDate(value);
  //     // setName({...Name , [value.target.name]:value.target.value});
  //   };
  //   console.log(Name);
  // return (
  //   <div style={{ width: 400, margin: "100px auto" }}>
  //     <Space.Compact>
  //       <Search
  //         addonBefore="https://"
  //         placeholder="input search text"
  //         allowClear
  //       />
  //     </Space.Compact>
  //     <Space.Compact
  //       style={{
  //         width: "100%",
  //       }}
  //     >
  //       <Input name="name" onChange={(e)=> setName(e.target.value)}/>
  //       <Button >Submit</Button>
  //     </Space.Compact>

  //     <Space direction="vertical">
  //       <Input.Password placeholder="input password" />
  //       <Input.Password
  //         placeholder="input password"
  //         iconRender={(visible) =>
  //           visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
  //         }
  //       />
  //     </Space>
  //     <DatePicker onChange={handleChange} />
  //     <div style={{ marginTop: 16 }}>
  //       Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
  //     </div>
  //     {contextHolder}
  //   </div>
  // );
}

export default App;
