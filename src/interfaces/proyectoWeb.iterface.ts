export interface IProyectoWeb{
    id:number,
    title:string,
    imgLogo?:string,
    video:string,
    images:string[],
    link:string,
    github?:string,
    description:{
        title:string,
        body:string
    },
    technologies:{
        name:string,
        imgLogo:string,
        description:string
    }[],
}