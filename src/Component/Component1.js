import React, {useEffect,useState,useRef} from 'react';
import { useLocation } from "react-router-dom";

import socketIOClient from 'socket.io-client';
const SOCKET_SERVER_URL = "http://localhost:4000";
const Component1 = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [user, setUser] = useState();
  const socketRef = useRef();
  const location = useLocation();
  const data = location.state;
  console.log("data....",  data);
  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId:"123", name: "sikandar", picture:"https://res.cloudinary.com/ddxozicjg/image/upload/v1600153508/blob_cegdcc.jpg" },
    });

    socketRef.current.on("connect", () => {
      console.log(socketRef.current.id);
    });
  }, [])
  return (
    <div>hiiiii</div>
  )
};

export default Component1;

  //  const [socket, setSocket] = useState(null);
  //   const socketRef = useRef();
  // useEffect(() => {
  //   const newSocket = io(`http://${window.location.hostname}:8000`);
  //   setSocket(newSocket);
  //   return () => newSocket.close();
  // }, [setSocket]);
  //   return <h1>Component 1</h1