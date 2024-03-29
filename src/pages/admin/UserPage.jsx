import React, { useEffect, useState, useCallback } from 'react'
import { Button, Popconfirm, Table } from 'antd';
import { deleteUsers, fetchUsers } from '../../redux/slices/users.lice';
import { useDispatch } from 'react-redux';
import { message } from "antd";

const UserPage = () => {

  const [dataSoruce, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  
  const restFetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await dispatch(fetchUsers());
      if (response.payload) {
        setDataSource(response.payload);
      } else {
        message.error("Məlumatlar gəlmədi!")
      }

    } catch (error) {
      throw error
    } finally {
      setLoading(false);
    }
  }, [dispatch]);



  const restFetchDeleteUser = async(userEmail) => {
    try {
      const response = await dispatch(deleteUsers(userEmail));
      if (response.payload) {
        message.success("İstifadəçi müvəffəqiyyətlə silindi!")
        restFetchUser();
      } else {
        message.error("Silmə xətası!")
      }

    } catch (error) {
      throw error
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    restFetchUser()
  }, [restFetchUser])



  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img src={imgSrc} alt="avatar" style={{ widows: "50px", borderRadius: "50%", height: "50px" }} />
      )
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
      
        <Popconfirm
        title="İstifadəçini sil"
        description="İstifadəçini silmək istədiyinizdən əminsiniz mi?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => restFetchDeleteUser(record.email)}
        >
          <Button danger>Sil</Button>
        </Popconfirm>
    
        )
    },
  ];
  return (

    <Table 
    dataSource={dataSoruce} 
    columns={columns} 
    rowKey={(record) => record._id}
    loading={loading}
    />

  )
}

export default UserPage
