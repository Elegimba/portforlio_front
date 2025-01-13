export interface IProyects {
    _id: string;
    title: string;
    description: string;
    link?: string;
    github: {
        back: string;
        front: string;
    },
    image: string;
    year: number
}
