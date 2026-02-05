// Although the URL class is global, you can still explicitly import
// it for clarity if preferred.
// const { URL } = require('url'); 

// 1. Parsing a complete URL
const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(`The full URL is: ${myURL.href}`);
console.log('--- URL Components ---');

// 2. Accessing various properties of the URL object
console.log(`Protocol: ${myURL.protocol}`);   // 'https:'
console.log(`Origin: ${myURL.origin}`);     // 'https://sub.example.com:8080'
console.log(`Host: ${myURL.host}`);         // 'sub.example.com:8080'
console.log(`Hostname: ${myURL.hostname}`); // 'sub.example.com'
console.log(`Port: ${myURL.port}`);         // '8080'
console.log(`Username: ${myURL.username}`); // 'user'
console.log(`Password: ${myURL.password}`); // 'pass'
console.log(`Pathname: ${myURL.pathname}`); // '/p/a/t/h'
console.log(`Search: ${myURL.search}`);     // '?query=string'
console.log(`Hash: ${myURL.hash}`);         // '#hash'

console.log('--- Query Parameters ---');

// 3. Working with query parameters using the searchParams object (URLSearchParams)
// This is a powerful, modern way to handle queries.
console.log(`Query parameter 'query' value: ${myURL.searchParams.get('query')}`);

myURL.searchParams.append('newParam', 'newValue');
console.log(`Updated Search: ${myURL.search}`); // '?query=string&newParam=newValue'

// 4. Constructing a URL from a relative path and a base URL
const baseURL = 'https://example.com/';
const relativePath = '/users/profile?id=123';
const profileURL = new URL(relativePath, baseURL);
console.log(`\nConstructed URL: ${profileURL.href}`);
