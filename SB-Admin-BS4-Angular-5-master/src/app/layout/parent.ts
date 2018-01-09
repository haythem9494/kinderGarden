// import { children } from "./children";

// parent class to define this object's properties.
export class parent {
    constructor(
        public _id: string,
        public name: string,
        public lastename: string,
        public age: number,
        public phone: number,  
        public email: string,
        public password: string,
       // public children?: Array<children>,
    ) { }
}