export const dataQueryJuntas = gql`
      query juntas {
        juntas {
            data {
                attributes {
                    nombre,
                    cargo,
                    email,
                    instagram,
                    facebook,
                    whatsapp
                }
            }
        }
    }
  `