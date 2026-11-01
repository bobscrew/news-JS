import AppLoader from './appLoader';
import { SourcesResponse, EverythingResponse, Callback } from '../../types';

class AppController extends AppLoader {
    // Типизируем коллбэк через дженерик из types.ts
    public getSources(callback: Callback<SourcesResponse>): void {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<EverythingResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        if (!target || !newsContainer) return;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp<EverythingResponse>(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            
            const parent = target.parentNode as HTMLElement;
            if (!parent) return;
            target = parent;
        }
    }
}

export default AppController;