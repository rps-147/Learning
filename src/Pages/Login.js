import React ,{useState, useEffect }from "react";

import { Input, Space,Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
function Login() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div className="register-container">
      <div className="register-content">
      <br /><br/>
        <Input placeholder="User Name" />
        <br /><br/>
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
           <br /><br/>
            <Button type="primary"> Sign In </Button>
      </div>
    </div>
  );
}

export default Login;
