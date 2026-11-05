import './sources.css';
import { Source } from '../../../types';

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();

        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        if (!sourceItemTemp) return;

        data.forEach((item: Source) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const nameElement = sourceClone.querySelector('.source__item-name');
            if (nameElement) nameElement.textContent = item.name;

            const itemElement = sourceClone.querySelector('.source__item');
            if (itemElement) itemElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
