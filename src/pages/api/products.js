export default function handler(req, res) {
    const products = [
        { id: 1, name: "Перфоратор", price: 1000 },
        { id: 2, name: "Дрель", price: 500 },
    ];

    res.status(200).json(products);
}
