import Image from "next/image";
import Link from "next/link";
import { Pet, PetList } from "@/types/pet";

export default async function InformationPage() {
    const res = await fetch("https://69f83644dd0c226688ee3fe7.mockapi.io/webpet", {
        cache: "no-store",
    });

    if (!res.ok) {
        return <div className="p-8 text-center">Lỗi tải dữ liệu</div>;
    }

    const data: PetList = await res.json();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 p-8">

            <h1 className="text-center text-3xl font-bold mb-10 text-white drop-shadow">
                🐾 Pet Information
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                {Array.isArray(data) ? (
                    data.map((item: Pet) => (
                        <Link
                            key={item.id}
                            href={`/information/${item.id}`}
                            className="block group"
                        >
                            <div className="bg-white text-black rounded-2xl shadow-md p-4 flex gap-4 hover:scale-105 transition group-hover:shadow-lg">
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 object-cover rounded-xl"
                                />

                                {/* Content */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="font-bold text-lg mb-2 text-black group-hover:text-pink-600 transition">
                                            {item.title}
                                        </p>

                                        <p className="text-gray-600 text-sm">
                                            {item.description}
                                        </p>
                                    </div>

                                    <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded mt-3 w-fit">
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-white">Data không hợp lệ</p>
                )}
            </div>
        </div>
    );
}