import Image from "next/image";

export default function AboutPage() {
  const skills = ["Dinh dưỡng", "Sức khỏe", "Lông mượt", "Thư giãn", "Sạch sẽ"];

  return (
    <div className="py-10 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Menu</h2>

      {/* Hình ảnh */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="text-center">
          <img
            src="/images/menu.jpg"
            alt="Menu"
            width={500}
            height={300}
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <p className="mt-2 text-sm text-white font-medium">
            🐶 Thức ăn dinh dưỡng cho thú cưng🐱
          </p>
        </div>
        

        <div className="text-center">
          <img
            src="/images/spa.jpg"
            alt="Menu Spa"
            width={500}
            height={300}
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <p className="mt-2 text-sm text-white font-medium">
            🐶 Dịch vụ spa cho thú cưng🐱
          </p>
        </div>

        
      </div>

      {/* Benefit */}
      <h3 className="text-2xl font-semibold mb-4 text-center">Benefit</h3>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-pink-200 text-pink-800 rounded-full font-medium hover:bg-pink-300 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}