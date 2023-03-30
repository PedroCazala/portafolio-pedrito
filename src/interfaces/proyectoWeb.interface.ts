export interface IProyectoWeb{
    id:number,
    title:string,
    imgLogo?:string,
    video?:string,
    images:string[],
    link:string,
    github?:string,
    description:string,
    technologies:string[],
    estado:'Por iniciar' | 'En proceso' | 'Finalizado'
}