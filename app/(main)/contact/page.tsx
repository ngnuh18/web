"use client";
import { Button, Card, Typography, Space } from "antd";

const { Title, Text } = Typography;

export default function ContactPage() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Card
        style={{
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          background: "white"
        }}
      >
        {/* Title */}
        <Title level={2}>Contact me</Title>

        {/* Button Zalo */}
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            type="primary"
            size="large"
            block
            href="https://zalo.me/342689059"
            target="_blank"
          >
            Chat ngay 🐶
          </Button>

          {/* Info */}
          <Text>
            Phone:{" "}
            <a href="tel:0342689059">0342689059</a>
          </Text>

          <Text>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/ngnuh18"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook của tôi
            </a>
          </Text>
        </Space>
      </Card>

      {/* Floating Button */}
      <Button
        type="primary"
        shape="circle"
        size="large"
        href="https://zalo.me/342689059"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        🐶
      </Button>
    </div>
  );
}