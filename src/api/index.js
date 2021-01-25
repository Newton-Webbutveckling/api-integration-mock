export async function fetchCharacters(page=1){
  const req = await fetch(`https://swapi.dev/api/people?page=${page}`)
  const data = await req.json()
  return data.results
}

