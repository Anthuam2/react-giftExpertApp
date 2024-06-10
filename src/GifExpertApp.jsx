import { useState } from "react";
import { AddCategories, GifGrid } from "./components";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["saitama"]);

    const AddCategory = categoryToAdd => {
        if (categories.includes(categoryToAdd)) return;
        setCategories([categoryToAdd, ...categories]);
    };

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategories
                //  setCategories={setCategories}
                newCategory={e => {
                    AddCategory(e.toLowerCase());
                }}
            />

            {categories.map(category => (
                <>
                    <GifGrid key={category.toLowerCase()} category={category} />
                    <div className="view-more">ver mas</div>
                </>
            ))}
            <p>powered by netlify</p>
        </>
    );
};
