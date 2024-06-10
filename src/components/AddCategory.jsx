import { useState } from "react";

export const AddCategories = ({ newCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const submit = e => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        newCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={e => submit(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    );
};
