import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-column';
import '@vaadin/grid/vaadin-grid-sort-column';
import '@vaadin/grid/vaadin-grid-selection-column';
import { columnBodyRenderer } from '@vaadin/grid/lit.js';
import StaticData from 'Frontend/data/staticData';

export function ActionGrid () {
    
    setTimeout(() => {
        const grid = document.querySelector('#actionGrid');
        grid.items = StaticData?.actionData;
    }, 1000);

    // const content = () => {
    //     return (
    //         <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/J.League.svg" alt="JL" />
    //     )
    // }

    return (
        <vaadin-grid id='actionGrid' multi-sort multi-sort-priority="append" className='actionGrid'>
            {/* <vaadin-grid-column  id='imgCol' path="img" header=""></vaadin-grid-column> */}
            <vaadin-grid-sort-column path="status" header="STATUS"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="action" header="ACTION"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="standard" header="STANDARD"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="dueDate" header="DUE DATE"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="owner" header="OWNER"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="department" header="DEPARTMENT"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="project" header="PROJECT"></vaadin-grid-sort-column>
            <vaadin-grid-selection-column path="completed" header="COMPLETED"></vaadin-grid-selection-column>
        </vaadin-grid>
    );
}