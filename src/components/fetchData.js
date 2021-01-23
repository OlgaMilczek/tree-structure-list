export default  async function fetchData() {
    const response = await fetch('./data-tree.json', 
        {
            mode: 'cors',
        });
    try {
        return await response.json();
    } catch {
        throw Error('Error fetching data.');
    }
}

