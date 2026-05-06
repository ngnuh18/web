"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, Typography, Button, message, DatePicker, Input, Space } from "antd";
import { ShoppingCartOutlined, CalendarOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function DetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [item, setItem] = useState<any>(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`https://69fb443c88a7af0ecca8e0c0.mockapi.io/menu/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Lỗi lấy chi tiết:", err));
  }, [id]);

  // ✅ Fix lỗi NaN bằng cách loại bỏ dấu chấm/phẩy
  const cleanPrice = (price: any) => {
    if (!price) return "0";
    return price.toString().replace(/[\.,]/g, "");
  };

  const formatPrice = (price: any) => {
    if (!price) return "Liên hệ";
    const priceStr = price.toString();
    
    if (priceStr.includes("-")) {
      return priceStr
        .split("-")
        .map((p: string) => Number(cleanPrice(p)).toLocaleString("vi-VN"))
        .join(" - ");
    }
    return Number(cleanPrice(priceStr)).toLocaleString("vi-VN");
  };

  // 🛒 Thêm vào giỏ hàng
  const addToCart = () => {
    setLoading(true);
    fetch("https://69fb443c88a7af0ecca8e0c0.mockapi.io/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: item.id,
        name: item.name,
        price: cleanPrice(item.price), // Gửi số sạch để tính toán sau này
        image: item.image,
        quantity: 1
      }),
    })
      .then(() => message.success("Đã thêm vào giỏ hàng!"))
      .catch(() => message.error("Lỗi kết nối!"))
      .finally(() => setLoading(false));
  };

  // 📅 Đặt lịch Spa
  const bookSpa = () => {
    if (!name || !date) {
      message.error("Vui lòng nhập tên và chọn ngày!");
      return;
    }
    setLoading(true);
    fetch("https://69fb443c88a7af0ecca8e0c0.mockapi.io/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: name,
        date: date.format("DD/MM/YYYY"),
        serviceName: item.name,
        serviceId: item.id
      }),
    })
      .then(() => {
        message.success("Đặt lịch thành công!");
        setName(""); // Reset form
        setDate(null);
      })
      .catch(() => message.error("Lỗi gửi dữ liệu!"))
      .finally(() => setLoading(false));
  };

  if (!item) return <div style={{ textAlign: "center", padding: "50px" }}>Đang tải...</div>;

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => router.back()} 
        style={{ marginBottom: "20px" }}
      >
        Quay lại
      </Button>

      <Card
        style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        cover={
          <img
            src={item.image}
            alt={item.name}
            style={{ height: "400px", objectFit: "cover" }}
          />
        }
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Title level={2} style={{ marginBottom: 0 }}>{item.name}</Title>
          
          <Text type="secondary" style={{ fontSize: "16px" }}>{item.description}</Text>

          <Text strong style={{ fontSize: "22px", color: "#fa541c" }}>
            {formatPrice(item.price)} VND
          </Text>

          <hr style={{ border: "0.5px solid #f0f0f0", margin: "10px 0" }} />

          {/* Hiển thị tùy theo loại item */}
          {item.type === "food" ? (
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size="large"
              block
              loading={loading}
              onClick={addToCart}
            >
              Thêm vào giỏ hàng
            </Button>
          ) : (
            <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
              <Title level={5}>Thông tin đặt lịch</Title>
              <Input
                placeholder="Tên của bạn/ thú cưng"
                style={{ marginBottom: "12px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <DatePicker
                placeholder="Chọn ngày thực hiện"
                style={{ width: "100%", marginBottom: "15px" }}
                value={date}
                onChange={(value) => setDate(value)}
                format="DD/MM/YYYY"
              />
              <Button
                type="primary"
                icon={<CalendarOutlined />}
                size="large"
                block
                loading={loading}
                onClick={bookSpa}
              >
                Xác nhận đặt lịch
              </Button>
            </div>
          )}
        </Space>
      </Card>
    </div>
  );
}