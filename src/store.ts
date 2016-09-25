import { observable } from 'mobx'

export interface UiStore {
    compiler: string;
    framework: string;
}

class Store {
    compiler = "Typescript";
    @observable framework = "React";
}

export const UiStateStore = new Store();
