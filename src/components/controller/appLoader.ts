import Loader from './loader';
import { LoaderOptions } from '../../types';

class AppLoader extends Loader {
    constructor(
        baseLink: string = window.location.hostname === 'localhost' 
            ? (process.env.API_URL as string) 
            : 'https://rss-news-api.onrender.com/',
            
        options: LoaderOptions = { 
            apiKey: process.env.API_KEY as string 
        }
    ) {
        super(baseLink, options);
    }
}
export default AppLoader;