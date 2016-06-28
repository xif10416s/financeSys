export interface ViewItem {
    title:string;
    path?:string;
    role:string[];
    subview?:ViewItem[];
}