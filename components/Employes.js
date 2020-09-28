import { Button, Checkbox } from "antd";
import antd from "antd";
import { Typography } from "antd";
import SidePuPop from "../components/sidePoup";
const { Text } = Typography;
import { PlusOutlined, UpOutlined } from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
const { Table, Card, Row, Col, Tag } = antd;

const columns = [
  {
    title: "",
    dataIndex: "key",
    render: (value, record, rowIndex) => (
      <Checkbox
        onChange={() => {
          console.log("");
        }}
      />
    ),
  },

  {
    title: "",
    dataIndex: "Image",
    render: (theImageURL) => (
      <div style={{ width: "50px" }}>
        <img alt={theImageURL} src={theImageURL} className="User_imgTable" />
      </div>
    ),
  },
  {
    title: "FullName",
    dataIndex: "FullName",
    render: (FullName) => (
      <span>
        {FullName.map((text, i) => (
          <span>
            {i === 0 ? <span>{text}</span> : null}
            {i === 1 ? <h4 style={{ color: "#c8cacc" }}>{text}</h4> : null}
          </span>
        ))}
      </span>
    ),
  },
  {
    title: "UserName",
    dataIndex: "UserName",
  },
  {
    title: "Branch",
    dataIndex: "Branch",
  },
  {
    title: "PhoneNumber",
    dataIndex: "PhoneNumber",
  },
  {
    title: "",
    dataIndex: "",
    render: () => (
      <BsThreeDots style={{ cursor: " pointer" }} color="rgb(161, 158, 158)" />
    ),
  },
];

const data = [
  {
    key: "1",
    Image: "../static/img/1.png",
    FullName: ["Libbie Head", "Cashier"],
    UserName: "gamfirppery",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)953-7665",
  },
  {
    key: "2",
    Image: "../static/img/2.png",
    FullName: ["Tigao Mack", "Cashier"],
    UserName: "muickbrouldy",
    Branch: "The Station",
    PhoneNumber: "(449)953-8655",
  },
  {
    key: "3",
    Image: "../static/img/3.png",
    FullName: ["Israr Brookes", "Cashier"],
    UserName: "scarpraven",
    Branch: "Amerrat ST.",
    PhoneNumber: "(449)823-3645",
  },
  {
    key: "4",
    Image: "../static/img/4.png",
    FullName: ["Bayley Melton", "Cashier"],
    UserName: "maniacpascals",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)253-7335",
  },
  {
    key: "5",
    Image: "../static/img/5.png",
    FullName: ["Elliot Sanford", "Cashier"],
    UserName: "thoughtemit",
    Branch: "The station",
    PhoneNumber: "(449)953-7665",
  },
  {
    key: "6",
    Image: "../static/img/6.png",
    FullName: ["Oran O'Reilly", "Cashier"],
    UserName: "hollowsecrt",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)356-2225",
  },
  {
    key: "7",
    Image: "../static/img/7.png",
    FullName: ["Sonia Gould", "Cashier"],
    UserName: "satellitedragging",
    Branch: "Ammerrat St.",
    PhoneNumber: "(449)987-354",
  },
  {
    key: "8",
    Image: "../static/img/8.png",
    FullName: ["Lsla-Mae Shelton", "Cashier"],
    UserName: "mullifyboolean",
    Branch: "Amerrat St.",
    PhoneNumber: "(449)897-6545",
  },
  {
    key: "9",
    Image: "../static/img/9.png",
    FullName: ["Tomos Krause", "Cashier"],
    UserName: "sunburnumome",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)953-7665",
  },
  {
    key: "10",
    Image: "../static/img/10.png",
    FullName: ["Aizah Hull", "Cashier"],
    UserName: "moughcompactor",
    Branch: "Baghdad Mall",
    PhoneNumber: "(449)321-665",
  },
  {
    key: "11",
    Image: "../static/img/11.png",
    FullName: ["Samiha Casey", "Cashier"],
    UserName: "definitionpurist",
    Branch: "The Station",
    PhoneNumber: "(449)563-321",
  },
];
{
}
const Employes = () => {
  const [show, setShow] = useState(false);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const showPopup = () => {
    setShow(!show);
  };
  return (
    <div className="content" style={{ marginLeft: "225px" }}>
      <div className="content_innefr">
        <Row
          style={{
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Col className="page_content">
            <div>
              <Button type="primary" className="main_btn" onClick={showPopup}>
                <FaPlus style={{ marginRight: "7px" }} />
                New Employee
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              style={{ height: "100%" }}
              rowClassName="table_row"
              onChange={onChange}
              className="table"
              pagination={{
                total: 20,
                style: {
                  display: "flex",

                  color: "gray",
                },

                showTotal: (total) => `View search for 1 from 2 search we got.`,
              }}
            />
          </Col>
          <Col
            style={{
              maxWidth: "100%",
              flex: "0 0 40px",
              display: "flex",
              flexDirection: "column",
            }}
          ></Col>
        </Row>
      </div>
    </div>
  );
};

export default Employes;
