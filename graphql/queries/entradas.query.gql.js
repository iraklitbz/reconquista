export const dataQueryEntradas = gql`
      query entradas($page: Int, $pageSize: Int) {
        entradas(pagination: { page: $page, pageSize: $pageSize }) {
          meta {
            pagination {
              total
            }
          }
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
              categoria
            }
          }
        }
      }
  `