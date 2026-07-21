import { useEffect, useMemo, useState } from "react"
import "./Product.css"

const demoProducts = [
    { id: "linen-shirt", title: "The Everyday Linen Shirt", price: 68, category: "Clothing", description: "A relaxed essential cut from breathable European linen.", image: "https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=900&q=85", rating: 4.9 },
    { id: "ceramic-vase", title: "Hand-thrown Ceramic Vase", price: 42, category: "Home", description: "A one-of-a-kind vessel with a soft, organic silhouette.", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85", rating: 4.8 },
    { id: "leather-tote", title: "The Soft Leather Tote", price: 120, category: "Accessories", description: "Roomy, structured, and made to get better with age.", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85", rating: 5.0 },
    { id: "daily-candle", title: "Sunday Morning Candle", price: 28, category: "Wellness", description: "Notes of cedar, bergamot, and a slow, quiet morning.", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85", rating: 4.7 },
]

const formatPrice = (price) => `₦${Number(price || 0).toLocaleString("en-NG")}`

export const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [sort, setSort] = useState("featured")
    const [bag, setBag] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("http://localhost:3001/api/v1/product")
                const response = await res.json()
                setProducts(Array.isArray(response?.product) ? response.product : demoProducts)
            } catch (error) {
                console.warn("Products unavailable, showing sample products.", error)
                setProducts(demoProducts)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [])

    const categories = useMemo(() => ["All", ...new Set(products.map((item) => item.category).filter(Boolean))], [products])
    const visibleProducts = useMemo(() => {
        const result = products.filter((item) => {
            const matchesSearch = `${item.title} ${item.description || ""}`.toLowerCase().includes(search.toLowerCase())
            return matchesSearch && (category === "All" || item.category === category)
        })
        if (sort === "low") return result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0))
        if (sort === "high") return result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0))
        return result
    }, [products, search, category, sort])

    const addToBag = (item) => setBag((current) => current.includes(item.id) ? current : [...current, item.id])

    return (
        <main className="storefront">
            <section className="store-hero">
                <div className="hero-copy">
                    <p className="eyebrow">THE EDIT · 01</p>
                    <h1>Things made<br /><em>with intention.</em></h1>
                    <p className="hero-intro">Thoughtful objects for everyday rituals. Curated slowly, chosen well, and made to stay with you.</p>
                    <a className="hero-link" href="#collection">Explore the collection <span>↘</span></a>
                </div>
                <div className="hero-art" aria-label="A still life of selected products">
                    <div className="sun-shape" />
                    <div className="hero-note">New<br />arrivals</div>
                    <div className="hero-bottle" />
                    <div className="hero-vase" />
                    <div className="hero-leaf leaf-one" />
                    <div className="hero-leaf leaf-two" />
                </div>
            </section>

            <section className="collection" id="collection">
                <div className="collection-heading">
                    <div>
                        <p className="eyebrow">SHOP ALL</p>
                        <h2>Our collection <span>({products.length || 0})</span></h2>
                    </div>
                    <p className="collection-blurb">A small selection of useful, beautiful things. Designed for your home, your wardrobe, and the spaces in between.</p>
                </div>

                <div className="shop-toolbar">
                    <div className="category-list">
                        {categories.map((item) => <button className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}
                    </div>
                    <div className="toolbar-actions">
                        <label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search pieces" /></label>
                        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
                            <option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
                        </select>
                        <div className="bag-count">Bag <b>{bag.length}</b></div>
                    </div>
                </div>

                {loading ? <div className="loading-state">Gathering the good things<span>...</span></div> : (
                    <div className="product-grid">
                        {visibleProducts.map((prod, index) => <article className="product-card" key={prod.id || prod._id || prod.title}>
                            <div className="product-image-wrap">
                                <img src={prod.image || prod.imageUrl || prod.images?.[0] || demoProducts[index % demoProducts.length].image} alt={prod.title} className="product-image" />
                                {index === 0 && <span className="product-tag">Editor&apos;s pick</span>}
                                <button className="quick-add" onClick={() => addToBag(prod)}>{bag.includes(prod.id) ? "Added ✓" : "Add to bag +"}</button>
                            </div>
                            <div className="product-info"><div><p className="product-category">{prod.category || "Curated"}</p><h3>{prod.title}</h3></div><strong>{formatPrice(prod.price)}</strong></div>
                            <p className="product-description">{prod.description || "A considered piece for everyday living."}</p>
                            <div className="product-rating">★★★★★ <span>{prod.rating || "4.9"}</span></div>
                        </article>)}
                    </div>
                )}
                {!loading && visibleProducts.length === 0 && <div className="empty-state">No pieces found. Try a different search.</div>}
            </section>
            <footer className="store-footer"><span>Made for slow living.</span><span>© 2026 ARDEN STUDIO</span></footer>
        </main>
    )
}
