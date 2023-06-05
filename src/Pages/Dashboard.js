import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { Button, Card, Row, Col } from "antd";
import CardProfile from "../Component/Common/CardProfile";


function Dashboard() {
  const [user, setUser] = useState();
  const Navigate = useNavigate();
  const openChat=(id)=>{
    const data = { name: "John", age: 30 };
    Navigate("/chat", { state: data });
    // Navigate('/chat');
  }

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:4000/api/users");
      console.log("Response.....", response);
      setUser(response);
    };
    fetchUser();
  }, []);

  return (
    <Row className="dashboard-container">
      <Col span={6}>dsds</Col>
      <Col span={15}>
        <Row >
          {user
            ? user.data.map((i, j) => {
                return (
                  <Col span={12} className="mt-5">
                    <CardProfile i={i} j={j} openChat={(id)=>openChat(id)}/>
                  </Col>
                );
              })
            : null}
        </Row>
      </Col>
      <Col span={3}>dsdsd</Col>
    </Row>
  );
}

export default Dashboard;
