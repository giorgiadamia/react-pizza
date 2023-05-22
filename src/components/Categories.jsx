import React, {useState} from 'react';

function Categories() {

    const categories = [
        'All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Stuffed'
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, key) => (
                        <li
                            className={activeIndex === key ? 'active' : ''}
                            onClick={() => setActiveIndex(key)}
                        >{value}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;