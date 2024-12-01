import { useRouter } from "next/router";

export default function CategoryPage() {
    const router = useRouter();
    const { category } = router.query;

    return (
        <div>
            <h1>Категория: {category}</h1>
            {/* Добавь логику для отображения товаров */}
        </div>
    );
}
