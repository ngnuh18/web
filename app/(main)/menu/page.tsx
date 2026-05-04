"use client";

import Link from "next/link";
import { Row, Col, Card, Typography, Tag, Button } from "antd";

const { Title, Text } = Typography;

export default function AboutPage() {
  const skills = ["Dinh dưỡng", "Sức khỏe", "Lông mượt", "Thư giãn", "Sạch sẽ"];

  return (
    <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>

      {/* Title */}
      <Title level={2} style={{ textAlign: "center" }}>
        Menu Dịch Vụ
      </Title>

      {/* Cards */}
      <Row gutter={[20, 20]} style={{ marginTop: "30px" }}>

        {/* FOOD */}
        <Col xs={24} md={12}>
          <Card
            hoverable
            style={{ borderRadius: "16px", overflow: "hidden" }}
            cover={
              <div style={{ position: "relative" }}>
                <img
                  src="/images/menu.jpg"
                  alt="Menu"
                  style={{
                    height: "260px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <Tag
                  color="red"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontWeight: "bold",
                  }}
                >
                  HOT
                </Tag>
              </div>
            }
          >
            <Title level={4}>Thức ăn thú cưng</Title>
            <Text>
              🐶 Pate, hạt dinh dưỡng, đồ ăn sạch cho chó mèo
            </Text>

            <br /><br />

            <Button
              type="primary"
              block
              href="https://thepet.vn/san-pham/"
              target="_blank"
            >
              Xem chi tiết
            </Button>
          </Card>
        </Col>

        {/* SPA */}
        <Col xs={24} md={12}>
          <Card
            hoverable
            style={{ borderRadius: "16px", overflow: "hidden" }}
            cover={
              <div style={{ position: "relative" }}>
                <img
                  src="/images/spa.jpg"
                  alt="Spa"
                  style={{
                    height: "260px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <Tag
                  color="green"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontWeight: "bold",
                  }}
                >
                  NEW
                </Tag>
              </div>
            }
          >
            <Title level={4}>Spa thú cưng</Title>
            <Text>
              🛁 Tắm, cắt tỉa lông, chăm sóc toàn diện
            </Text>

            <br /><br />

            {/* 👉 FIX Ở ĐÂY */}
            <Link href="/contact">
              <Button type="primary" block>
                Đặt lịch ngay
              </Button>
            </Link>

          </Card>
        </Col>

      </Row>

      {/* Benefit */}
      <Title level={3} style={{ textAlign: "center", marginTop: "50px" }}>
        Lợi ích
      </Title>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {skills.map((skill) => (
          <Tag
            key={skill}
            color="pink"
            style={{
              padding: "10px 18px",
              fontSize: "14px",
              borderRadius: "20px",
              margin: "6px",
            }}
          >
            {skill}
          </Tag>
        ))}
      </div>

    </div>
  );
}