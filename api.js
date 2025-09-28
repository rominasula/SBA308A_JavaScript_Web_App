export async function fetchStatusData(code) {
    try {
        // Use AllOrigins proxy to bypass CORS
        const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://status.pizza/${code}.json`)}`;
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Status ${code} not found`);
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
}
