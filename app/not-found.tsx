import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-red-500">404</h2>
      <p className="text-xl mt-4">Không có tồn tại trang này vui lòng quay lại.</p>
      <p className="text-xl mt-4">Quay trở lại, trang không tồn tại!.</p>
      <Link href="/" className="mt-6 text-blue-600 hover:underline">Quay lại trang chủ</Link>
    </div>
  );
}