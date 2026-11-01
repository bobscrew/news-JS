import Loader from './loader';
import { LoaderOptions } from '../../types';

class AppLoader extends Loader {
    constructor(
        baseLink: string = 'https://rss-news-api.onrender.com/', 
        options: LoaderOptions = { apiKey: 'YOUR_API_KEY_FROM_ENV' }
    ) {
        super(baseLink, options);
    }
}
export default AppLoader;