export interface appointement 
{
    id:string
    entities: appointement[];
    time: string
    status: boolean
    doctorId: number
    doctorName: string
    patientId: number
    patientName: string
    payment:string
}
