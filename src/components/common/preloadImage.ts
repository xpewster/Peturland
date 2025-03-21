const CACHE_SIZE = 21;
const CACHE2_SIZE = 20;
const imageCache = new Map<string, HTMLImageElement>();
const imageCache2 = new Map<string, HTMLImageElement>();

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

export const preloadImage2 = (src: string) => {
    if (imageCache2.has(src)) {
        return Promise.resolve(imageCache2.get(src));
    }

    return new Promise((resolve, reject) => {
        const image = new Image();
        
        image.onload = () => {
            if (imageCache2.size >= CACHE2_SIZE) {
                const oldestKey = imageCache2.keys().next().value;
                oldestKey && imageCache2.delete(oldestKey);
            }

            imageCache2.set(src, image);
            resolve(image);
        };
        
        image.onerror = (error) => {
            console.error(`Failed to preload: ${src}`, error);
            const retryImage = new Image();
            retryImage.onload = () => {
                if (imageCache2.size >= CACHE2_SIZE) {
                    const oldestKey = imageCache2.keys().next().value;
                    oldestKey && imageCache2.delete(oldestKey);
                }
                
                imageCache2.set(src, retryImage);
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