// import "@vaadin/vaadin";
import '@vaadin/tabs';

export function Tabs (props) {
  const { tabList } = props;
  
  
  return (
      <vaadin-tabs>
        {
          tabList.map((tab) => {
            return(<vaadin-tab id={tab} key={tab}>{tab}</vaadin-tab>)
          })
        }
       </vaadin-tabs>
  );
}