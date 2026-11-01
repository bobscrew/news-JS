import './news.css';
import { Article } from '../../../types';

class News {
    public draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        if (!newsItemTemp) return;

        news.forEach((item: Article, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photoElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (photoElement) {
                photoElement.style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
            }

            const authorElement = newsClone.querySelector('.news__meta-author');
            if (authorElement) {
                authorElement.textContent = item.author || item.source.name;
            }

            const dateElement = newsClone.querySelector('.news__meta-date');
            if (dateElement) {
                dateElement.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
            }

            const titleElement = newsClone.querySelector('.news__description-title');
            if (titleElement) titleElement.textContent = item.title;

            const sourceElement = newsClone.querySelector('.news__description-source');
            if (sourceElement) sourceElement.textContent = item.source.name;

            const contentElement = newsClone.querySelector('.news__description-content');
            if (contentElement) contentElement.textContent = item.description;

            const linkElement = newsClone.querySelector('.news__read-more a');
            if (linkElement) linkElement.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;