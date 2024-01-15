export const dataQueryEntrada = gql`
      query entradas($slug: String!) {
        entradas(filters:{slug:{eq: $slug}}) {
          data {
            attributes {
              titulo,
              slug,
              fecha,
              destacado {
                data {
                    attributes {
                        formats
                        url
                    }
                }
              },
              entradilla,
              categoria,
              contenido
            }
          }
        }
      }
  `