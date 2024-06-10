import { useFecthGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { imgs, isLoading } = useFecthGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? <h2>cargando...</h2> : null}
            <ol className="card-grid">
                {imgs.map(({ title, id, url }) => {
                    return (
                        <div className="card" key={id}>
                            <img
                                src={url}
                                alt={title.trim() === "" ? "untitled" : title}
                            />
                            <p>{title.trim() === "" ? "untitled" : title}</p>
                        </div>
                    );
                })}
            </ol>
        </>
    );
};
