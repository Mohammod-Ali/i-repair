export const getServices = async () => {
    return await fetch ('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
}
