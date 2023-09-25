interface MakeGroqQueryParams {
    type: string,
    id?: string;
    category?: string;
    query?: string;
    price?: number;
    priceMax?: number;
    priceMin?: number;
    rating?: number;
    title?: string;
}
export function makeGroqQuery({ type, query, category, id, price, priceMax, priceMin, rating, title }: MakeGroqQueryParams) {
    const conditions = [`*[_type == "${type}"`];

    if (query) {
        conditions.push(`title match "${query}*"`);
    }

    if (category && category !== "all") {
        conditions.push(`category->title == "${category}"`);
    }
    if (id) {
        conditions.push(`_id == "${id}"`);
    }
    if (title) {
        conditions.push(`title == "${title}"`);
    }
    if (price) {
        conditions.push(`price <= ${price}`);
    }
    if (priceMax && priceMin) {
        conditions.push(`price <= ${priceMax} && price >= ${priceMin}`);
    }
    if (rating) {
        conditions.push(`rating.rate >= ${rating}`);
    }

    if (conditions.length > 1) {
        return `${conditions[0]} && (${conditions.slice(1).join("&&")})]`
    }
    return conditions[0] + "]";
}