export const siteInfoFragment = `
    fragment: page(id: $fragmentUri, idType: URI) {
    mainFields {
      linkYoutube
      linkInsta
      linkFacebook
      gmail
      phone1
      phone2
      address
      timeWork
      siteDescription
      titleSite
      logoSite {
        sourceUrl
      }
      iconSite {
        sourceUrl
      }
    }
  }
  `;
