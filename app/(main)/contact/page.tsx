export default function ContactPage() {
  return (
    <div className="py-10 max-w-xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold">Contact me</h2>

      {/* Nút Zalo trong layout */}
      <a
        href="https://zalo.me/342689059"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
      >
        Chat ngay 🐶
      </a>

      {/* Nút Zalo nổi */}
      <a
        href="https://zalo.me/342689059"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-pink-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-pink-600"
      >
        🐶
      </a>

      {/* Thông tin liên hệ */}
      <div className="text-lg">
        <p>
          Phone:{" "}
          <span className="font-semibold text-blue-600">
            <a href="tel:0342689059">0342689059</a>
          </span>
        </p>
      </div>
      <div className="text-lg">
        <p>
          Facebook:{" "}
          <span className="font-semibold text-blue-600">
            <a href="https://www.facebook.com/ngnuh18" target="_blank" rel="noopener noreferrer">
              https://www.facebook.com/ngnuh18
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}