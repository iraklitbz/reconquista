export const dataQueryCreateSocio = gql`
      mutation createSocio(
        $nombre: String!, 
        $apellidos: String!, 
        $cuenta: String!
        
      ) {
            createSocio(
                data: { 
                    nombre: $nombre, 
                    apellidos: $apellidos, 
                    cuenta: $cuenta 
                    }) 
                {
                data {
                attributes {
                    nombre
                }
            }
        }
    }
`