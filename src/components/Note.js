import React from "react";

class Note extends React.Component {
    render() {
        return (
            <form>
                <input type="text" /*value={this.state.value} onChange={this.handleChange}*/ />
            </form>
        );
    }
}

export default Note;
