"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pet } from "@/types/pet";

export default function PetDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    const [pet, setPet] = useState<Pet | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPetDetail = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://69f83644dd0c226688ee3fe7.mockapi.io/webpet/${id}`,
                    {
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    setError("Không thể tải thông tin pet");
                    return;
                }

                const data: Pet = await res.json();
                setPet(data);
            } catch (err) {
                setError("Lỗi khi tải dữ liệu");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPetDetail();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 p-8 flex items-center justify-center">
                <p className="text-2xl text-white font-semibold">Đang tải...</p>
            </div>
        );
    }

    if (error || !pet) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 p-8 flex flex-col items-center justify-center gap-6">
                <p className="text-2xl text-white font-semibold">{error || "Pet không tồn tại"}</p>
                <button
                    onClick={() => router.back()}
                    className="bg-white text-pink-600 font-bold px-6 py-3 rounded-lg hover:bg-pink-100 transition"
                >
                    ← Quay lại
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 bg-white text-pink-600 font-bold px-4 py-2 rounded-lg hover:bg-pink-100 transition"
                >
                    ← Quay lại
                </button>

                {/* Detail Card */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Image */}
                    <div className="relative w-full h-96 bg-gray-200">
                        <img
                            src={pet.image}
                            alt={pet.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {pet.title}
                        </h1>

                        {/* Type Badge */}
                        <div className="mb-6">
                            <span className="inline-block bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-lg font-semibold">
                                {pet.type}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-700 mb-3">
                                Mô tả
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {pet.description}
                            </p>
                        </div>

                        {/* ID Info */}
                        <div className="border-t pt-4">
                            <p className="text-gray-600">
                                <span className="font-semibold">ID:</span> {pet.id}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
