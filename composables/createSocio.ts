interface Socio {
    nombre: string
    apellidos: string,
    DNI: string,
    direccion: string,
    postal: number,
    localidad: string,
    banco: string,
    cuenta: string,
    telefono: string,
    email: string
}
export default async (
    sendData: Socio
) => {
    const config = useRuntimeConfig()
    const CMS_URL = config.public.CMS_URL
    const data = await $fetch(`${CMS_URL}/api/socios`, {
        method: 'POST',
        body: {
            data: sendData
        }
    }).catch(error => error.data)
    const socios = (data as any)
    return socios
}
