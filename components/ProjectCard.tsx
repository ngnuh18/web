interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  imagePath: string; // Đây là đường dẫn ảnh truyền từ page.tsx sang
}

export default function ProjectCard({ title, description, tech, imagePath }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-[32px] border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
      {/* KHUNG ẢNH */}
      <div className="h-48 w-full border-b-2 border-black overflow-hidden bg-gray-100">
        <img 
          src={imagePath} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* NỘI DUNG */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{description}</p>
        <div className="mt-auto">
          <span className="inline-block px-3 py-1 border border-black rounded-full text-xs font-bold text-black bg-blue-50">
            {tech}
          </span>
        </div>
      </div>
    </div>
  );
}