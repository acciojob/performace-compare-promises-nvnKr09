// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchDataUsingPromiseAll(apiUrls) {
    const startTime = performance.now();
    return Promise.all(apiUrls.map(url => fetch(url)))
      .then(responses => {
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        return timeTaken.toFixed(2);
      });
  }

  function fetchDataUsingPromiseAny(apiUrls) {
    const startTime = performance.now();
    return Promise.any(apiUrls.map(url => fetch(url)))
      .then(response => {
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        return timeTaken.toFixed(2);
      });
  }

  Promise.all([
    fetchDataUsingPromiseAll(apiUrls),
    fetchDataUsingPromiseAny(apiUrls)
  ]).then(([timeTakenAll, timeTakenAny]) => {
    document.getElementById('output-all').textContent = timeTakenAll;
    document.getElementById('output-any').textContent = timeTakenAny;
  }).catch(error => {
    console.error('Error:', error);
  });