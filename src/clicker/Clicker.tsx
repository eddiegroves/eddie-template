import * as React from "react";
import { UiStore } from "../store";
import { button1 } from "./styles.css";

export interface ClickerProps { store: UiStore; }

export class Clicker extends React.Component<ClickerProps, {}> {
    render() {
        return <h1><button type="button" className={button1} onClick={this.onButtonClick}>Click me</button></h1>;
    }

    onButtonClick = () => {
        if (this.props.store.framework === "React") {
            this.props.store.framework = "Mobx";
        } else {
            this.props.store.framework = "React";
        }
    }
}
