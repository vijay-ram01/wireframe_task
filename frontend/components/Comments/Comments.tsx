import '@vaadin/avatar';
import StaticData from 'Frontend/data/staticData';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export function Comments () {
    let offSiteData: { comment: string; postedDate: string; postedBy: string; type: string; archived: boolean; }[] = [];
    let onSiteData: { comment: string; postedDate: string; postedBy: string; type: string; archived: boolean; }[] = [];
    StaticData.jleData.map((data) => {
        if(data.type === "offsite") {
            offSiteData.push(data)
        } else {
            onSiteData.push(data)
        }
    });
    let data = [offSiteData, onSiteData];
    
    return (
        <div className="commentContainer">
            {
                data.map((d: { comment: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; postedDate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
                    <div className="commentBox">
                        <div className="commentTxt">
                            {d.comment}
                        </div>
                        <span className="postedDate">{d.postedDate}</span>
                        <vaadin-avatar>A</vaadin-avatar>
                    </div>
                })
            }
        </div>
    );
}