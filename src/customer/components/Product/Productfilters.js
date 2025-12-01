export const filters = [

    {
        id: 'color',
        name: 'Color',
        type: 'checkbox',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        type: 'checkbox',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        type: 'checkbox',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
    {
        id: 'Price',
        name: 'Price',
        type: 'radio',
        options: [
            { value: '159-399', label: '₹159 to ₹399', },
            { value: '399-999', label: '399 to ₹999', },
            { value: '999-1999', label: '₹999 to ₹1999', },
            { value: '1999-2999', label: '₹1999 to ₹2999', },
            { value: '2999-3999', label: '₹2999 to ₹3999', },
            { value: '3999-4999', label: '₹3999 to ₹4999', },
        ],
    },
    {
        id: 'Disccount Range',
        name: 'Disccount Range',
        type: 'radio',
        options: [
            { value: '10', label: '10 % and above', checked: false },
            { value: '20', label: '20 % and above', checked: false },
            { value: '70', label: '70 % and above', checked: false },
            { value: '60', label: '60 % and above', checked: false },
            { value: '55', label: '55 % and above', checked: false },
            { value: '25', label: '25 % and above', checked: true },
        ],
    },
    {
        id: 'Availability',
        name: 'Availability',
        type: 'radio',
        options: [
            { value: 'In Stock', label: 'In Stock', checked: false },
            { value: 'Out of Stock', label: 'Out of Stock', checked: false },

        ],
    },
]