export const defaultInventory = {
    seeds: {
        onion: 10,
        potato: 10,
    },
}

export const getInventory = () => {
    const currentInventory = window.localStorage.getItem('inventory');
    if (currentInventory) return JSON.parse(currentInventory)
    return defaultInventory;
}
