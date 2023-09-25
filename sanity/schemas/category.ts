const category = {
    name: 'categoryItem',
    title: 'Category',
    type: 'document',
    fields: [
        { 
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(3).max(20)
         }
    ]
}

export default category;