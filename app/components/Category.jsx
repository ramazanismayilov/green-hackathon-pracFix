"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa"; // React Icons'dan ikonları içe aktar

function Category() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");
    const [editCategory, setEditCategory] = useState(null); 
    const [editCategoryName, setEditCategoryName] = useState("");
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://pracfix-back.onrender.com/api/category");
            setCategories(response.data);
        } catch (err) {
            setError("Kategoriyaları əldə etmək mümkün olmadı.");
            console.error(err);
        }
    };

    // Yeni kateqoriya yaratmaq
    const createCategory = async () => {
        // Boş kateqoriya adı yoxlanışı
        if (!newCategory.trim()) {
            alert("Kateqoriya adı boş ola bilməz!");
            return; 
        }

        try {
            const response = await axios.post("https://pracfix-back.onrender.com/api/category", { name: newCategory });
            setCategories([...categories, response.data.category]);
            setNewCategory("");
        } catch (err) {
            setError("Kateqoriya yaradılarkən xəta baş verdi.");
            console.error(err);
        }
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`https://pracfix-back.onrender.com/api/category/${id}`);
            setCategories(categories.filter((category) => category._id !== id));
        } catch (err) {
            setError("Kateqoriya silinərkən xəta baş verdi.");
            console.error(err);
        }
    };

    // Kateqoriyanı yeniləmək (Update)
    const updateCategory = async (id) => {
        try {
            const response = await axios.patch(`https://pracfix-back.onrender.com/api/category/${id}`, { name: editCategoryName });
            setCategories(
                categories.map((category) => (category._id === id ? response.data.category : category))
            );
            setEditCategory(null); 
            setEditCategoryName(""); 
        } catch (err) {
            setError("Kateqoriya yenilənərkən xəta baş verdi.");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-6">Kategoriyalar</h2>

            {/* Yeni kateqoriya əlavə etmək */}
            <div className="flex items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Yeni kateqoriya adı"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={createCategory}
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    <FaPlus />
                    Əlavə et
                </button>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Kategoriyaların siyahısı */}
            <div className="space-y-4">
                {categories.map((category) => (
                    <div key={category._id} className="p-4 shadow-lg border rounded-lg flex justify-between items-center">
                        {editCategory === category._id ? (
                            <div className="flex items-center gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Yeni kateqoriya adı"
                                    value={editCategoryName}
                                    onChange={(e) => setEditCategoryName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    onClick={() => updateCategory(category._id)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    Yenilə
                                </button>
                                <button
                                    onClick={() => setEditCategory(null)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                >
                                    İmtina et
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="text-lg font-medium">{category.name}</p>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => {
                                            setEditCategory(category._id);
                                            setEditCategoryName(category.name);
                                        }}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => deleteCategory(category._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
