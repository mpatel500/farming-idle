const defaultInventory = {
    seeds: {
        onion: 10,
        potato: 10,
    },
}

const getInventory = () => {
    const currentInventory = window.localStorage.getItem('inventory');
    return currentInventory || defaultInventory;
}

export default getInventory;
