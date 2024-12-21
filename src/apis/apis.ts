import axios from 'axios';
import { NYTResponse } from './types';
import { formatDate } from '../../utils/helpers';

const API_KEY = 'Scz9cka0JAAZR9kOjPKo9eCmH0qraOGt';
const BASE_URL = 'https://api.nytimes.com/svc';


export const fetchTopStories = async (section: string = 'home'): Promise<NYTResponse> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/topstories/v2/${section}.json?api-key=${API_KEY}`
    );

    return {
      ...response.data,
      results: response?.data?.results.map((doc: any) => ({
        id: doc.published_date,
        title: doc.title,
        abstract: doc.abstract,
        url: doc.url,
        published_date: doc.published_date,
        multimedia: doc.multimedia[0].url,
        byline: doc.byline,
        section: doc.section,
        subsection: doc.subsection,
        date: formatDate(doc.created_date),
      })),
    };
  } catch (error) {
    console.error('Error fetching NYT articles:', error);
    throw error;
  }
};
