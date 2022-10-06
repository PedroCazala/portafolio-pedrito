export interface IProyectoWeb{
    title:string,
    imgLogo?:string,
    video:string,
    images:string[],
    clases:string,
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