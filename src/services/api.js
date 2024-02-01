const BASE_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
     try {
          const response = await fetch(`${BASE_URL}/search/shows?q=all`);
          const data = await response.json();
          return data;
     } catch (error) {
          throw new Error('Error fetching shows');
     }
};

export const fetchShowDetails = async (id) => {
     try {
          const response = await fetch(`${BASE_URL}/shows/${id}`);
          const data = await response.json();
          return data;
     } catch (error) {
          throw new Error('Error fetching show details');
     }
};
