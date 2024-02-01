import {Button, Layout,Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { 
  DashboardOutlined,
  UserOutlined,
  LaptopOutlined,
  RollbackOutlined,
  BarcodeOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined
} from "@ant-design/icons"
import {useNavigate} from "react-router-dom"
import { Content, Header } from "antd/es/layout/layout"

const getUserRole = () => {
  // Eger user ile giris edirikse adminin goruyu sehifeni gore bilmez
  // const user = JSON.parse(localStorage.getItem("userToken"));
  // return user ? user.userRole : null
  const userRole = localStorage.getItem("userRole");
  return userRole ? userRole : null;
}

const AdminLayout = ({children}) => {
  const navigate = useNavigate();
  const userRole = getUserRole();
  //Bir nestedMenudur
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Kategoriler",
      path: "/",
      children: [
        {
          key: "3",
          label: "Kategori Listesi",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "4",
          label: "Yeni Kategori Oluştur",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Ürünler",
      path: "/",
      children: [
        {
          key: "6",
          label: "Ürün Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "7",
          label: "Yeni Ürün Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "8",
      icon: <BarcodeOutlined />,
      label: "Kuponlar",
      path: "/admin/coupons",
      children: [
        {
          key: "9",
          label: "Kupon Listesi",
          path: "/admin/coupons",
          onClick: () => {
            navigate(`/admin/coupons`);
          },
        },
        {
          key: "10",
          label: "Yeni Kupon Oluştur",
          path: "/admin/coupons/create",
          onClick: () => {
            navigate("/admin/coupons/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "Kullanıcı Listesi",
      path: "/admin/users",
      onClick: () => {
        navigate(`/admin/users`);
      },
    },
    {
      key: "12",
      icon: <ShoppingCartOutlined />,
      label: "Siparişler",
      onClick: () => {
        navigate(`/admin/orders`);
      },
    },
    {
      key: "13",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        window.location.href = "/"
      },
    },
  ];
  
  if (userRole === "admin"){
    return (
      <div className="admin-layout">
      <Layout style={{
        minHeight: "100vh"
      }}>
        <Sider  theme="dark">
          <Menu mode="vertical "
          items={menuItems}
          style={{
            height:"100%"
          }}
          />
        </Sider>
        <Layout>
          <Header>
         <div style={{
          display: "flex",
          justifyContent:"space-between",
          color:"wheat"
         }}>
          <h2>Admin Paneli</h2>
         </div>
          </Header>
          <Content>
         <div className="site-layout-backround"
         style={{
          padding:"24px, 50px",
          minHeight: "360px"
         }}
         >
         {children}
  
         </div>
          </Content>
        </Layout>
      </Layout>
      </div>
    )
  } else {
    return (window.location.href = "/");
  }
}

export default AdminLayout
