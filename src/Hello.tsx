import * as React from 'react';
import { observer } from 'mobx-react';
import { UiStore } from './store';

export interface HelloProps { store: UiStore }

@observer
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        const { framework, compiler } = this.props.store;
        return (
            <h1>Hello from {compiler} and {framework === "React" ? <span>{framework}</span> : <em>{framework}</em>}</h1>
        );
    }
}
