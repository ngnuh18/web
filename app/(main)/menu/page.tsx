"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Row, Col, Card, Typography, Button, Tag } from "antd";
import { ShoppingCartOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function MenuPage() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://69fb443c88a7af0ecca8e0c0.mockapi.io/menu")
      .then((res) => res.json())
      .then((resData) => {
        if (Array.isArray(resData)) {
          setData(resData);
        } else {
          setData([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Menu Dịch Vụ
      </Title>

      <Row gutter={[20, 20]} style={{ marginTop: "30px" }}>
        {data.length === 0 && <p>Đang tải dữ liệu...</p>}
        {data.map((item: any, index: number) => (
          <Col xs={24} md={12} key={item.id || index}>
            <Card
              hoverable
              style={{ borderRadius: "16px", overflow: "hidden" }}
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      height: "260px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Tag
                    color={item.type === "food" ? "red" : "green"}
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.type === "food" ? "FOOD" : "SPA"}
                  </Tag>
                </div>
              }
            >
              <Title level={4}>{item.name}</Title>
              <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                {item.description}
              </Paragraph>
              <br /><br />

              <Text strong style={{ fontSize: "18px", color: "#fa541c" }}>
                {typeof item.price === "string" && item.price.includes("-")
                  ? item.price
                    .split("-")
                    .map((p: string) => Number(p).toLocaleString("vi-VN"))
                    .join(" - ")
                  : Number(item.price).toLocaleString("vi-VN")
                } VND
              </Text>

              <br /><br />
              <Button
                type="primary"
                block
                size="large"
                icon={item.type === "food" ? <ShoppingCartOutlined /> : <CalendarOutlined />}
                onClick={() => {
                  if (item?.id) {
                    router.push(`/menu/${item.id}`);
                  } else {
                    alert("Sản phẩm này chưa có mã ID!");
                  }
                }}
              >
                {item.type === "food" ? "Xem chi tiết" : "Tìm hiểu thêm"}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}