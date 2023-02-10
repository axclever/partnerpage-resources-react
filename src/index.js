import React, {Component} from 'react'
import PropTypes from "prop-types";

const CONFIG = {
    widgetUrl: "https://d234q4yvnowsmr.cloudfront.net/widget.js",
    RootNodeId: "PartnerpageEmbedWidget",
    allowedMethods: ["start"],
    defaultMode: "default"
};

class ResourcesWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: props.apiKey,
            partnerId: props.partnerId,
            mode: props.mode
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.partnerId !== state.partnerId) {
            // initialize Embed Widget
            window.Partnerpage.start({el: `#${CONFIG.RootNodeId}`, partnerId: props.partnerId});
            return {partnerId: props.partnerId};
        }

        return null;
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        const apiKey = this.state.apiKey;
        const mode = this.state.mode;

        if (!apiKey) return false;

        window.Partnerpage || (function (e, t, a) {
            e.Partnerpage = {apiKey, mode, _cs: []};
            const methods = CONFIG.allowedMethods;

            methods.forEach(function (t) {
                e.Partnerpage[t] = function () {
                    const a = Array.prototype.slice.call(arguments);
                    e.Partnerpage._cs.push({name: t, args: a});
                };
            });
            const r = t.createElement(a);
            r.src = CONFIG.widgetUrl;
            r.type = 'text/javascript';
            const n = document.getElementsByTagName(a)[0];
            n.parentNode.insertBefore(r, n);
        })(window, document, 'script');
    }

    render() {
        return <div id={CONFIG.RootNodeId}/>;
    }
}

ResourcesWidget.defaultProps = {
    mode: CONFIG.defaultMode,
    apiKey: "",
    partnerId: ""
};

ResourcesWidget.propTypes = {
    apiKey: PropTypes.string.isRequired,
    partnerId: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(["default", "frame"])
};

export default ResourcesWidget;