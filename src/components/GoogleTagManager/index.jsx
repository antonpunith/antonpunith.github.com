import React from 'react';
import gtmParts from 'react-google-tag-manager';


const GoogleTagManager = ({ dataLayerName, scriptId, additionalEvents }) => {


    if (!window[dataLayerName]) {
        const gtmScriptNode = document.getElementById(scriptId);
        eval(gtmScriptNode.textContent);
    }

    const gtm = gtmParts({
        id: this.props.gtmId,
        dataLayerName: dataLayerName || 'dataLayer',
        additionalEvents: additionalEvents || {}
    });

    return (
        <div>
            <div>{gtm.noScriptAsReact()}</div>
            <div id={scriptId || 'react-google-tag-manager-gtm'}>
                {gtm.scriptAsReact()}
            </div>
        </div>
    );
}




export default GoogleTagManager;
