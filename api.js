export async function fetchStatusData(code) {
    try {
        const res = await fetch(`https://status.pizza/${code}.json`);
        if (!res.ok) throw new Error(`Status ${code} not found`);
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
}
