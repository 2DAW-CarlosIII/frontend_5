export function jsonProvider() {
  return fetch('http://encuentro.com/api/books')
    .then(response => response.json())
    .then(data => {
      let libros = data;
      return libros;
    })

}