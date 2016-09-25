import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UiStateStore as Store } from './store'
import { Hello } from './Hello';
import { Clicker } from "./Clicker";

ReactDOM.render(
    <div>
        <Clicker store={Store} />
        <Hello store={Store} />
    </div>,
    document.getElementById("app")
);
