
import Link from 'next/link';

export default function HomePage() {
  return (
    
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-40 h-40 mx-auto rounded-full overflow-x-hidden
shadow-2xl border-4 border-white 
transition duration-500 hover:scale-105">

        <img
          src="https://thepet.vn/wp-content/uploads/2022/05/THE-PET-BLACK.png"
          alt="Avatar"
          className="w-full h-full object-cover 
    transition duration-500 
    hover:scale-110 hover:rotate-3"
        />

      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">THE PET VIETNAM</h1>
      <p className="text-xl text-white-600 max-w-2xl mb-8">
Công ty TNHH TMDV Thú Cưng Việt Nam (The Pet Viet Nam Trading Services Company)      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <Link href="/introduce" className="px-6 py-3 bg-pink-900 text-white rounded-lg font-semibold hover:bg-pink-700 transition">
          Introduce
        </Link>
        <Link href="/menu" className="px-6 py-3 border border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition">
          Menu
        </Link>
      </div>
      <a
        href="https://zalo.me/342689059"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-pink-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-pink-600"
      >
        🐶
      </a>
    </div>
    
  
  );
}