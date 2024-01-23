export const dataQueryRevistas = gql`
      query revistas {
        revistas {
            data {
                attributes {
                    titulo,
                    fecha,
                    revista {
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