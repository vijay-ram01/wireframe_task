import { useState } from "react";
import Switch from "react-switch";
import { Comments } from "Frontend/components/Comments/Comments";
import StaticData from "Frontend/data/staticData";
import '@vaadin/avatar';
import '@vaadin/tooltip';

export function JLE (props) {
    let {status} = props;
    let [switchButton, setSwitchButton] = useState(false);
    let offSiteData = [
        {
            comment: "Proin scelerisque purus consectetur, pellentesque arcu aliquam, aliquam risus. Pellentesque vehicula aliquet mi vel faucibus. Etiam id dolor feugiat, pretium risus in, cursus mi. Aliquam tincidunt cursus consectetur. Pellentesque pulvinar pulvinar pellentesque. Etiam eget rutrum nibh, vel accumsan magna. Proin bibendum malesuada mi, rhoncus consequat eros scelerisque vitae. Nulla auctor efficitur venenatis.",
            postedDate: "23.01.14",
            postedBy: "Mr Asahi Dune",
            type: "offsite",
            archived: false
        },
        {
            comment: "Proin enim libero, porttitor sit amet ipsum ut, viverra dignissim eros. Phasellus tortor mi, commodo sed magna sed, rhoncus malesuada elit. Aenean vitae fringilla sem. Morbi quis varius felis, fermentum finibus quam. Aliquam quis viverra enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tortor vitae orci vestibulum malesuada. Phasellus consequat quam a dui posuere accumsan. Integer arcu nulla, bibendum ac mauris eget, varius elementum enim. Sed iaculis orci non nisi dapibus, vehicula ultrices urna luctus. In id est non nulla hendrerit laoreet ac vitae quam. Nulla id euismod elit, eget tincidunt risus.",
            postedDate: "22.11.10",
            postedBy: "Mr Tom Merric",
            type: "offsite",
            archived: false
        },
        {
            comment: "Phasellus tortor mi, commodo sed magna sed, rhoncus malesuada elit. Aenean vitae fringilla sem. Morbi quis varius felis, fermentum finibus quam. Aliquam quis viverra enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tortor vitae orci vestibulum malesuada. Phasellus consequat quam a dui posuere accumsan. Integer arcu nulla, bibendum ac mauris eget, varius elementum enim. Sed iaculis orci non nisi dapibus, vehicula ultrices urna luctus. In id est non nulla hendrerit laoreet ac vitae quam. Nulla id euismod elit, eget tincidunt risus.",
            postedDate: "24.12.09",
            postedBy: "Mr Sam Ferrick",
            type: "offsite",
            archived: true
        }
    ];
    let onSiteData = [
        {
            comment: "Nam id sem consequat, scelerisque lectus quis, euismod ipsum. Nullam a quam non tellus finibus faucibus. Morbi scelerisque consectetur laoreet. Etiam viverra libero orci, vel mollis ligula laoreet quis. Vivamus sed enim velit. Donec ultrices tellus a lorem posuere, ac consectetur metus tincidunt. Etiam vitae velit odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sit amet eros tempus, vestibulum lectus at, tristique mauris. Phasellus et vulputate augue. Nam et tristique felis. Cras eleifend purus iaculis, imperdiet magna vitae, sollicitudin enim. Sed sed nunc sapien. Etiam quis eros nec nibh egestas vulputate et vel nulla. Duis ut tellus posuere, luctus ante id, mollis dui. Cras varius vulputate ipsum, id maximus tortor cursus id.",
            postedDate: "22.11.09",
            postedBy: "Mr Manish Dhalo",
            type: "onsite",
            archived: false
        },
        {
            comment: "Sed at finibus tortor. Aliquam quis risus nisl. Sed euismod ornare fermentum. Vivamus vestibulum diam nec orci rutrum, vitae volutpat erat euismod. Ut leo urna, volutpat non tellus vulputate, porta interdum augue. Suspendisse nec dapibus arcu. Pellentesque non odio eget tortor faucibus suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec id velit nibh. Proin sed elit eget nunc suscipit commodo. Pellentesque eu ornare ex. Donec at hendrerit turpis. Nunc sit amet dolor vitae ex lacinia dignissim. Donec vitae erat sit amet purus rutrum sagittis vitae in ipsum.",
            postedDate: "23.01.14",
            postedBy: "Mr Stew Marquez",
            type: "onsite",
            archived: false
        },
        {
            comment: "Aenean vitae fringilla sem. Morbi quis varius felis, fermentum finibus quam. Aliquam quis viverra enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed tortor vitae orci vestibulum malesuada. Phasellus consequat quam a dui posuere accumsan. Integer arcu nulla, bibendum ac mauris eget, varius elementum enim. Sed iaculis orci non nisi dapibus, vehicula ultrices urna luctus. In id est non nulla hendrerit laoreet ac vitae quam. Nulla id euismod elit, eget tincidunt risus.",
            postedDate: "22.11.10",
            postedBy: "Ms Forex Ciadel",
            type: "onsite",
            archived: true
        }
    ];

    let [offSiteExpand, setOffSiteExpand] = useState(true);
    let [onSiteExpand, setOnSiteExpand] = useState(true);
    let [showComments, setShowComments] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false
    });

    let styles = {
        copyIcon: {
            position: "absolute",
            right: 0,
            bottom: 0,
            margin: "12px"
        }
    }
    
    return (
        <div className="jleContainer">
            <div className="leftContent">
                <vaadin-text-field style={{width: '100%'}} aria-label="search" placeholder="Search" clear-button-visible>
                    <vaadin-icon icon="vaadin:search" slot="prefix"></vaadin-icon>
                </vaadin-text-field>
                <div className="sortBox">
                    <label>
                        <span>Include archived</span>
                        <Switch className="toggle" uncheckedIcon={false} checkedIcon={false} onChange={() => setSwitchButton(!switchButton)} checked={switchButton} width={30} height={15} />
                    </label>
                </div>
                <div className="commentSection">
                    <div className="comments offSite">
                        <div className="offSiteheader secHeader" onClick={() => setOffSiteExpand(!offSiteExpand)}>
                            <h5>OFF-SITE</h5>
                            {<vaadin-icon icon={offSiteExpand ? "vaadin:caret-up" : "vaadin:caret-down"} slot="prefix"></vaadin-icon>}
                        </div>
                        <div className="commentContainer" style={{display: offSiteExpand ? "block" : "none"}}>
                            <div className="commentBox" style={{backgroundColor: showComments.one && "#E9F1FD"}}>
                                <div className="commentTxt" onClick={() => setShowComments({one: !showComments.one, two: false, three: false, four: false})}>
                                    {(offSiteData[0].comment.length > 100 && !showComments.one) ? offSiteData[0].comment.slice(0,100) + "..." : offSiteData[0].comment}
                                </div>
                                <span className="postedDate">{offSiteData[0].postedDate}</span>
                                <vaadin-avatar></vaadin-avatar>
                                {showComments.one && <vaadin-icon style={styles.copyIcon} className="copyIcon" icon="vaadin:copy-o" onClick={() => navigator.clipboard.writeText(offSiteData[0].comment)}></vaadin-icon>}
                            </div>
                            <div className="commentBox" style={{backgroundColor: showComments.two && "#E9F1FD"}}>
                                <div className="commentTxt" onClick={() => setShowComments({one: false, two: !showComments.two, three: false, four: false})}>
                                    {(offSiteData[1].comment.length > 100 && !showComments.two) ? offSiteData[1].comment.slice(0,100) + "..." : offSiteData[1].comment}
                                </div>
                                <span className="postedDate">{offSiteData[1].postedDate}</span>
                                <vaadin-avatar></vaadin-avatar>
                                {showComments.two && <vaadin-icon style={styles.copyIcon} className="copyIcon" icon="vaadin:copy-o" onClick={() => navigator.clipboard.writeText(offSiteData[1].comment)}></vaadin-icon>}
                            </div>
                            {
                                switchButton &&
                                <div className="commentBox" style={{backgroundColor: showComments.five && "#E9F1FD"}}>
                                    <div className="commentTxt" onClick={() => setShowComments({one: false, two: false, three: false, four: false, five: !showComments.five, six: false})}>
                                        {(offSiteData[2].comment.length > 100 && !showComments.five) ? offSiteData[2].comment.slice(0,100) + "..." : offSiteData[2].comment}
                                    </div>
                                    <span className="postedDate">{offSiteData[2].postedDate}</span>
                                    <vaadin-avatar></vaadin-avatar>
                                    {showComments.five && <vaadin-icon style={styles.copyIcon} className="copyIcon" icon="vaadin:copy-o" onClick={() => navigator.clipboard.writeText(offSiteData[2].comment)}></vaadin-icon>}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="comments onSite">
                        <div className="onSiteheader secHeader" onClick={() => setOnSiteExpand(!onSiteExpand)}>
                            <h5>ON-SITE</h5>
                            <vaadin-icon icon={onSiteExpand ? "vaadin:caret-up" : "vaadin:caret-down"} slot="prefix"></vaadin-icon>
                        </div>
                        <div className="commentContainer" style={{display: onSiteExpand ? "block" : "none"}}>
                            <div className="commentBox" style={{backgroundColor: showComments.three && "#E9F1FD"}}>
                                <div className="commentTxt" onClick={() => setShowComments({one: false, two: false, three: !showComments.three, four: false})}>
                                    {(onSiteData[0].comment.length > 100 && !showComments.three) ? onSiteData[0].comment.slice(0,100) + "..." : onSiteData[0].comment}
                                </div>
                                <span className="postedDate">{onSiteData[0]?.postedDate}</span>
                                <vaadin-avatar></vaadin-avatar>
                                {showComments.three && <vaadin-icon style={styles.copyIcon} className="copyIcon" icon="vaadin:copy-o" onClick={() => navigator.clipboard.writeText(onSiteData[0].comment)}></vaadin-icon>}
                            </div>
                            <div className="commentBox" style={{backgroundColor: showComments.four && "#E9F1FD"}}>
                                <div className="commentTxt" onClick={() => setShowComments({one: false, two: false, three: false, four: !showComments.four})}>
                                    {(onSiteData[1].comment.length > 100 && !showComments.four) ? onSiteData[1].comment.slice(0,100) + "..." : onSiteData[1].comment}
                                </div>
                                <span className="postedDate">{onSiteData[1]?.postedDate}</span>
                                <vaadin-avatar></vaadin-avatar>
                                {showComments.four && <vaadin-icon style={styles.copyIcon} onClick={() => navigator.clipboard.writeText(onSiteData[1].comment)} className="copyIcon" icon="vaadin:copy-o"></vaadin-icon>}
                            </div>
                            {
                                switchButton &&
                                <div className="commentBox" style={{backgroundColor: showComments.six && "#E9F1FD"}}>
                                    <div className="commentTxt" onClick={() => setShowComments({one: false, two: false, three: false, four: false, five: false, six: !showComments.six})}>
                                        {(onSiteData[2].comment.length > 100 && !showComments.six) ? onSiteData[2].comment.slice(0,100) + "..." : onSiteData[2].comment}
                                    </div>
                                    <span className="postedDate">{onSiteData[2].postedDate}</span>
                                    <vaadin-avatar></vaadin-avatar>
                                    {showComments.six && <vaadin-icon style={styles.copyIcon} className="copyIcon" icon="vaadin:copy-o" onClick={() => navigator.clipboard.writeText(onSiteData[2].comment)}></vaadin-icon>}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightContent">
                <div className="rcHeader">
                    <p>7 Academy financial accounting</p>
                    <div className="status">
                        {
                            !status ?
                            <vaadin-button style={{backgroundColor: "#6152ff"}} theme="small success primary" aria-label="DONE" >
                                <vaadin-icon icon={status ? "vaadin:check" : "vaadin:clock"}></vaadin-icon>
                                {status ? "DONE" : "TO DO"}
                            </vaadin-button>
                            :
                            <vaadin-button theme="small success primary" aria-label="DONE" >
                                <vaadin-icon icon={status ? "vaadin:check" : "vaadin:clock"}></vaadin-icon>
                                {status ? "DONE" : "TO DO"}
                            </vaadin-button>
                        }
                        <vaadin-icon icon="vaadin:ellipsis-dots-v"></vaadin-icon>
                    </div>
                </div>
                <div>
                    <textarea className="textArea" placeholder="Add report comment text"></textarea>
                </div>
            </div>
        </div>
    );
}