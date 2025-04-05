const API_KEY = "c33b1e9c6c294c92b31e87e9881fd7c0"; 
const BASE_URL = "https://api.rawg.io/api";

export const fetchGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};


export const fetchGameDetails = async (id) => {
    const apiKey = "c33b1e9c6c294c92b31e87e9881fd7c0";
    const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch game details");
      return await response.json();
    } catch (error) {
      console.error("Error fetching game details:", error);
      return null;
    }
  };
  
export const fetchFilteredGames = async (filters) => {
    const { category, tags, year, ordering } = filters;
    let url = `${BASE_URL}/games?key=${API_KEY}`;
  
    if (category) url += `&genres=${category}`;
    if (tags) url += `&tags=${tags}`;
    if (year) url += `&dates=${year}-01-01,${year}-12-31`;
    if (ordering) url += `&ordering=${ordering}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching filtered games:", error);
      return [];
    }
  };
  export const searchGames = async (query) => {
    if (!query) return [];
  
    try {
      const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${query}`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error searching games:", error);
      return [];
    }
  };
  
  export const fetchGamesWithPagination = async (page = 1, filters = {}) => {
    const { category, tags, year, ordering, search } = filters;
    let url = `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=12`;
  
    if (category) url += `&genres=${category}`;
    if (tags) url += `&tags=${tags}`;
    if (year) url += `&dates=${year}-01-01,${year}-12-31`;
    if (ordering) url += `&ordering=${ordering}`;
    if (search) url += `&search=${search}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return { games: data.results, nextPage: data.next ? page + 1 : null };
    } catch (error) {
      console.error("Error fetching games:", error);
      return { games: [], nextPage: null };
    }
  };
  
  
