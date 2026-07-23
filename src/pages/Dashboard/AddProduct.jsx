import { useState } from "react";
import { useForm } from "react-hook-form";

const initialForm = {
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
};

export const AddProduct = () => {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [preview, setPreview] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm()



    const handleImage = (event) => {
        const { value } = event.target;
        setPreview(value);
        setForm((current) => ({ ...current, image: value }));
    };

    console.log(errors);

    const onSubmit = async (data) => {
        console.log(data);

    }


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsSubmitting(true);
    //     setStatus({ type: "", message: "" });

    //     const payload = {
    //         title: form.title.trim(),
    //         description: form.description.trim(),
    //         price: Number(form.price),
    //         category: form.category,
    //         image: form.image,
    //     };

    //     try {
    //         const response = await fetch("http://localhost:3001/api/v1/product", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(payload),
    //         });
    //         if (!response.ok) throw new Error("Unable to create product");
    //         setStatus({ type: "success", message: "Product added successfully." });
    //         setForm(initialForm);
    //         setPreview("");
    //     } catch (error) {
    //         console.warn(error);
    //         setStatus({
    //             type: "error",
    //             message: "Could not add product. Check your API and try again.",
    //         });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    return (
        <main className="min-h-[calc(100vh-80px)] bg-[#f7f8fa] px-5 py-8 text-slate-900 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                        Inventory
                    </p>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                        Add a new product
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Create a product listing and make it available in your store.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid gap-6 lg:grid-cols-[1fr_340px]"
                >
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="mb-7 border-b border-slate-100 pb-5">
                            <h2 className="text-lg font-semibold">Product details</h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Tell customers what makes this product special.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <label className="block text-sm font-semibold text-slate-700">
                                Product title
                                <input
                                    {...register("title", {
                                        required: "Title is required",
                                        maxLength: {
                                            value: 30,
                                            message: "Title must not be longer than 30 characters"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Title must not be shorter than 3 characters"
                                        }
                                    })}
                                    name="title"
                                    placeholder="e.g. Minimal ceramic vase"
                                    className="mt-2 block w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                />
                                {errors.title && <p className="text-red-600">{errors.title.message}</p>}
                            </label>
                            <label className="block text-sm font-semibold text-slate-700">
                                Description
                                <textarea
                                    name="description"
                                    {...register("description")}
                                    rows="5"
                                    placeholder="Describe the product, its materials, and what makes it useful..."
                                    className="mt-2 block w-full resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </label>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block text-sm font-semibold text-slate-700">
                                    Price
                                    <div className="mt-2 flex overflow-hidden rounded-xl border border-slate-200 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                                        <span className="bg-slate-50 px-4 py-3 text-slate-500">
                                            ₦
                                        </span>
                                        <input
                                            {...register("price")}

                                            min="0"
                                            step="0.01"
                                            type="number"
                                            name="price"
                                            placeholder="0.00"
                                            className="min-w-0 flex-1 px-4 py-3 font-normal outline-none"
                                        />
                                    </div>
                                </label>
                                <label className="block text-sm font-semibold text-slate-700">
                                    Category
                                    <select

                                        {...register("category")}
                                        name="category"
                                        className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    >
                                        <option value="">Select a category</option>
                                        <option>stationary</option>
                                        <option>electronics</option>
                                        <option>Accessories</option>
                                        <option>phone Accessory</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </section>

                    <aside className="space-y-6">
                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold">Product image</h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Upload a clear image for your listing.
                            </p>
                            <div className="mt-5 overflow-hidden rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-center transition focus-within:border-indigo-400">
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Product preview"
                                        className="h-48 w-full object-cover"
                                        onError={() => setPreview("")}
                                    />
                                ) : (
                                    <div className="flex h-48 flex-col items-center justify-center">
                                        <span className="mb-3 rounded-full bg-indigo-100 p-3 text-indigo-600">
                                            +
                                        </span>
                                        <span className="text-sm font-semibold text-slate-700">
                                            Add an image URL
                                        </span>
                                        <span className="mt-1 text-xs text-slate-400">
                                            Use a public PNG, JPG, or WEBP URL
                                        </span>
                                    </div>
                                )}
                                <input
                                    {...register("image")}
                                    name="image"
                                    type="url"
                                    value={form.image}
                                    onChange={handleImage}
                                    placeholder="https://example.com/product.jpg"
                                    className="block w-full border-t border-slate-200 bg-white px-4 py-3 text-left text-sm font-normal outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>
                        </section>
                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            {status.message && (
                                <p
                                    className={`mb-4 rounded-lg px-3 py-2 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}
                                >
                                    {status.message}
                                </p>
                            )}
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? "Adding product..." : "Add product"}
                            </button>
                            <p className="mt-3 text-center text-xs text-slate-400">
                                You can edit product details later.
                            </p>
                        </section>
                    </aside>
                </form>
            </div>
        </main>
    );
};
