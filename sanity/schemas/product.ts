const product = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            require,
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            require,
            validation: (Rule: any) => Rule.required().min(0),
        },
        {
            name: "description",
            title: "Description",
            type: "blockContent",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            require,
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        },
        {
            name: "rating",
            title: "Rating",
            type: "object",
            fields: [
                {
                    name: "count",
                    title: "How many people rate this product",
                    type: "number",
                    validation: (Rule: any) => Rule.required().min(1)
                },
                {
                    name: "rate",
                    title: "Rating of this product",
                    type: "number",
                    alidation: (Rule: any) => Rule.required().min(1).max(5)
                }
            ],

        },
        {
            name: "category",
            title: "Category",
            type: 'reference',
            to: [{ type: 'categoryItem' }],
            validation: (Rule: any) => Rule.required(),
        },

    ],

}

export default product;