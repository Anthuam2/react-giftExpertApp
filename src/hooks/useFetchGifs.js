import { useEffect, useState } from "react";
const getGifs = async (category, limit = 10) => {
    const key = "d5mJF4WJJljhdHgMi5jqPV1bc7j1VyS4";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=${limit}`;
    const R = await fetch(url);
    const { data = [] } = await R.json();
    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifts;
    // svHVxwAVtroV7VRze3tidZdwo5ceh1JH
    // d5mJF4WJJljhdHgMi5jqPV1bc7j1VyS4
    // Izzxy4zh6k3DhfhMThfMXW4ZhaEqnr9I
};

export const useFecthGifs = category => {
    const [imgs, setImgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImgs = async () => {
        const newImg = await getGifs(category);
        setImgs(newImg);
        setIsLoading(false);
    };

    useEffect(() => {
        getImgs();
    }, []);

    return {
        imgs,
        isLoading
    };
};
