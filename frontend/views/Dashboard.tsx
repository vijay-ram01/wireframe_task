import { Tabs } from "Frontend/components/Tabs/Tabs";
import '@vaadin/tabs';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/text-field';
import '@vaadin/accordion';
import '@vaadin/vertical-layout';
import '@vaadin/avatar';

import { Actions } from "Frontend/containers/Actions/Actions";
import { JLE } from "Frontend/containers/JLEvaluaation/JLE";
import SlimSelect from 'slim-select'
import { useState } from "react";


export function Dashboard () {
    let firstTab: Array<String>;
    firstTab = ["EVALUATION", "PERFORMANCE PLAN", "LICENCE", "LIBRARY", "REPORTS" ];

    let secondTab: Array<String>;
    secondTab = ["Target", "Self Assessment", "Off-Site", "On-Site", "Interim Report", "Self-Assessment 2", "Final Report"];

    let status: Array<String>;
    status = ["Pending", "Ready for review", "Completed"];

    let tabsStyle = {
        outerContainer: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        innerContainer: {
            paddingRight: '2px'
        }
    }

    let [done, setDone] = useState(false);

    setTimeout(() => {
        let idColumn = [];
        for(let i=1 ; i<19 ; i++) {
            idColumn.push({id: i});
        }
        const idGrid = document.getElementById('idGrid');
        idGrid.items = idColumn;
    }, 500)

    new SlimSelect({
        select: '#selectElement',
    })

    return (
        <div>
            <div className="header">
                <div className="headerFirst">
                <vaadin-icon icon="vaadin:menu" slot="prefix"></vaadin-icon>
                <vaadin-avatar></vaadin-avatar>
                <span style={{visibility: "hidden"}}>CHARTON ATHELETIC</span>
                </div>
                <div className="headerMid">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/J.League.svg" alt="JL" />
                    <span>Academy management platform</span>
                </div>
                <div className="headerLast">
                    <span>CHARTON ATHELETIC</span>
                    <vaadin-avatar></vaadin-avatar>
                    <vaadin-icon icon="vaadin:ellipsis-dots-v" slot="prefix"></vaadin-icon>
                </div>
            </div>
            <div className="contentWrapper">
                <div style={tabsStyle.outerContainer}>
                    <Tabs tabList={firstTab}/>
                    <Tabs tabList={secondTab}/>
                </div>

                <div className="searchFilterContainer">
                    <div className="searchBarContainer">
                        <vaadin-text-field value="" label="" aria-label="search" placeholder="Search" clear-button-visible>
                            <vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon>
                        </vaadin-text-field>
                    </div>
                    <div className="filterContainer">
                        <vaadin-text-field value="" label="" aria-label="filter" placeholder="Filters" clear-button-visible>
                            <vaadin-icon icon="vaadin:filter" slot="prefix"></vaadin-icon>
                        </vaadin-text-field>
                        {/* <select id="selectElement">
                            <option value="value1">Value 1</option>
                            <option value="value1">Value 2</option>
                            <option value="value1">Value 3</option>
                            <option value="value1">Value 4</option>
                            <option value="value1">Value 5</option>
                        </select> */}
                    </div>
                </div>

                <div className="mainContainer">
                    <vaadin-grid id="idGrid" theme="row-stripes" style={{width: '6px'}}>
                        <vaadin-grid-column path="id" header="ID" width="6px"></vaadin-grid-column>
                    </vaadin-grid>
                    <div className="mainContent">
                        <div className="mainContentHeader">
                            <h4>7 Academy financial accounting</h4>
                            <div className="statusBar">
                                <div className="reportStatus">
                                    <span>INTERIM REPORT</span>
                                    <div className="indicators"><div className="colorIndicator red"></div><span>Not Met</span></div>
                                </div>
                                <div className="reportStatus">
                                    <span>FINAL REPORT</span>
                                    <div className="indicators"><div className={done ? "colorIndicator mustard" : "colorIndicator white"}></div><span>{done ? "Partial" : "Not Started"}</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="accordianContainer">
                            <vaadin-accordion>
                                <vaadin-accordion-panel summary="STANDARDS">
                                    <vaadin-vertical-layout>
                                        <span>No results found</span>
                                    </vaadin-vertical-layout>
                                </vaadin-accordion-panel>

                                <vaadin-accordion-panel summary="ACTIONS">
                                    <vaadin-vertical-layout>
                                        <Actions />
                                    </vaadin-vertical-layout>
                                </vaadin-accordion-panel>

                                <vaadin-accordion-panel summary="EVIDENCE">
                                    <vaadin-vertical-layout>
                                    <span>No results found</span>
                                    </vaadin-vertical-layout>
                                </vaadin-accordion-panel>
                                    {
                                        !done && 
                                        <vaadin-button style={{position: "absolute", left: "152px", backgroundColor: "#6152ff"}} className="jleStatus" theme="small success primary" aria-label="DONE">
                                            <vaadin-icon icon={done ? "vaadin:check" : "vaadin:clock"}></vaadin-icon>
                                            {done ? "DONE" : "TO DO"}
                                        </vaadin-button>
                                    }
                                    <vaadin-accordion-panel summary="JL EVALUATION">
                                    <vaadin-vertical-layout>
                                        <JLE status={done}/>
                                    </vaadin-vertical-layout>
                                </vaadin-accordion-panel>
                            </vaadin-accordion>
                        </div>

                        <div className="mainContentFooter">
                            <vaadin-button className="cancelButton" style={{marginTop: '14px'}} theme="">Cancel</vaadin-button>
                            <div>
                                <vaadin-text-field style={{marginRight: '20px', paddingTop: '0px'}} label="Status" value="Ready for Review" readonly></vaadin-text-field>
                                <vaadin-button theme="primary" className="saveButton" onClick={() => setDone(true)}>Save</vaadin-button>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
        </div>
    );
}