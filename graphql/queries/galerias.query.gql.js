export const dataQueryGalerias = gql`
      query galerias {
        galerias {
            data {
                id,
                attributes {
                    titulo,
                    fecha,
                    galleria {
                      data {
                        attributes {
                        	url
                        }
                      }
                    }
                }
            }
        }
    }
  `

export const dataQueryGaleria = gql`
    query galeria($id: ID!) {
    galeria(id: $id) {
        data {
            id,
            attributes {
                titulo,
                fecha,
                galleria {
                    data {
                    attributes {
                        url,
                        name
                    }
                    }
                }
            }
        }
    }
    }
`