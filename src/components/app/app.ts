import AppController from '../controller/controller'; 
import { AppView } from '../view/appView';
import { EverythingResponse, SourcesResponse } from '../../types'; 

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources');
        
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: Event) => 
                this.controller.getNews(e, (data: EverythingResponse) => this.view.drawNews(data))
            );
        }

        this.controller.getSources((data: SourcesResponse) => {
            this.view.drawSources(data);
            
            // Меняем индекс с 0 на 1, чтобы брать второй источник
            if (data.sources && data.sources.length > 1) { 
                const firstSourceId = data.sources[1].id; 
                
                const mockEvent = {
                    target: {
                        classList: { contains: () => true },
                        getAttribute: () => firstSourceId
                    },
                    currentTarget: {
                        getAttribute: () => null,
                        setAttribute: () => {}
                    }
                } as unknown as Event;

                this.controller.getNews(mockEvent, (newsData: EverythingResponse) => {
                    this.view.drawNews(newsData);
                });
            }
        });
    }
}
export default App;