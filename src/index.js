import React, {Component} from 'react'
import PropTypes from "prop-types";

const CONFIG = {
    widgetUrl: "https://d21mben2wlxyvj.cloudfront.net/widget.js",
    RootNodeId: "PartnerpageEmbedWidget",
    allowedMethods: ["start"],
    defaultMode: "default"
};

class ResourcesWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: props.apiKey,
            token: props.token,
            mode: props.mode
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.token !== state.token) {
            // initialize Embed Widget
            window.Partnerpage.start({el: `#${CONFIG.RootNodeId}`, token: props.token});
            return {token: props.token};
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
    token: ""
};

ResourcesWidget.propTypes = {
    apiKey: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(["default", "frame"])
};

export default ResourcesWidget;