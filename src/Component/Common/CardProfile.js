import React from "react";
import { Button, Card, Row, Col } from "antd";
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { BsHeartFill, BsHeart,BiUpArrowAlt } from "react-icons";

import { FaArrowUp, FaRegHeart } from "react-icons/fa";

import { RiRadioButtonLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import "../../Component/Css/dashboard.css";
const { Meta } = Card;
function CardProfile(props) {
const {i,j,openChat} = props;
  return (
    <Card
      key={i.id}
      hoverable
      className="profile-user"
      // style={{ width: 240 }}
      cover={<img alt="example" src={i.image} />}
    >
      <Meta
        className="meta-card"
        title={
          <div className="title-description">
            {/* <div className="online-status"><RiRadioButtonLine style={{color: 'green', fontSize: '20px'}}/></div> */}
            <div>abcde</div>
          </div>
        }
        description={
          <div className="profile-footer">
            <span>
              {true ? (
                <BsChatDots style={{ color: "green", fontSize: "20px" }} onClick={()=>openChat(i.id)}/>
              ) : (
                <div className="online-status">
                  <RiRadioButtonLine
                    style={{ color: "green", fontSize: "20px" }}
                  />
                </div>
              )}
            </span>
            <span>
              <FaArrowUp style={{ color: "green", fontSize: "20px" }} /> 12
            </span>
            <span>
              <FaRegHeart style={{ color: "green", fontSize: "20px" }} /> 12
            </span>
          </div>
        }
      />
    </Card>
  );
}

export default CardProfile;
