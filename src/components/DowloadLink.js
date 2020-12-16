import React, {Component} from "react";

class DownloadLink extends Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}

export default DownloadLink;