import { useState } from "react";
import Switch from "react-switch";
import '@vaadin/button';
import '@vaadin/icon';
import '@vaadin/icons';
import { ActionGrid } from "Frontend/components/Grids/ActionGrid";

import StaticData from "Frontend/data/staticData";
import { State } from "@hilla/frontend";

export function Actions () {
    let [switchButton, setSwitchButton] = useState(false);
    
    return (
        <div className="actionContainer">
            <div className="actionHeader">
                <label>
                    <span>Show all actions</span>
                    <Switch className="toggle" uncheckedIcon={false} checkedIcon={false} onChange={() => setSwitchButton(!switchButton)} checked={switchButton} width={30} height={15} />
                </label>
                <vaadin-button theme="small primary">
                    <vaadin-icon icon="vaadin:plus"></vaadin-icon>
                    Add JL action
                </vaadin-button>
            </div>
            <div className="actionTable">
                {/* <ActionGrid items={StaticData.actionData}></ActionGrid> */}
                <ActionGrid />
            </div>
        </div>
    )
}