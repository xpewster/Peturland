const CACHE_SIZE = 9;
const imageCache = new Map<string, HTMLImageElement>();

export const preloadImage = (src: string) => {
    if (imageCache.has(src)) {
        return Promise.resolve(imageCache.get(src));
    }

    return new Promise((resolve, reject) => {
        const image = new Image();
        
        image.onload = () => {
            if (imageCache.size >= CACHE_SIZE) {
                const oldestKey = imageCache.keys().next().value;
                oldestKey && imageCache.delete(oldestKey);
            }

            imageCache.set(src, image);
            resolve(image);
        };
        
        image.onerror = (error) => {
            console.error(`Failed to preload: ${src}`, error);
            const retryImage = new Image();
            retryImage.onload = () => {
                if (imageCache.size >= CACHE_SIZE) {
                    const oldestKey = imageCache.keys().next().value;
                    oldestKey && imageCache.delete(oldestKey);
                }
                
                imageCache.set(src, retryImage);
                console.log(`Successfully preloaded on retry: ${src}`);
                resolve(retryImage);
            };
            retryImage.onerror = () => {
                console.error(`Failed to preload on retry: ${src}`);
                resolve(null);
            };
            retryImage.src = src;
        };
        
        image.src = src;
    });
};