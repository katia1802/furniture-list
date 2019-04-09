const URL = 'https://api.myjson.com/bins/rl7ac';

const createPromise = () => fetch (URL)
.then (response => response.json())

export {createPromise}