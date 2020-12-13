import React from 'react';

class Crisp extends React.Component {
    componentDidMount() {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "8857f89e-0eb5-4263-ab49-a293872b6c19";

        (function () {
            var d = document;
            var s = d.createElement("script");

            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();
    }

    render() {
        return null;
    }
}

export default Crisp