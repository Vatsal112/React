import Iframe from 'sanity-plugin-iframe-pane'
import { SEOPane } from 'sanity-plugin-seo-pane'

let frontend_url = "http://localhost:3000";
if (process.env.NODE_ENV === 'production') {
  frontend_url = "https://posts-sanity.netlify.app";
}
// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: any) {
  return doc?.slug?.current
    ? `${frontend_url}/${doc.slug.current}`
    : `${frontend_url}`
}

// Import this into the deskTool() plugin
export const defaultDocumentNode = (S: any, { schemaType }: any) => {
  // Only show preview pane on `movie` schema type documents

  const views = [
    S.view.form(),
    S.view
      .component(SEOPane)
      .options({
        keywords: `seo.keywords`,
        synonyms: `seo.synonyms`,
        url: (doc: any) => getPreviewUrl(doc),

      })
      .title('SEO')
  ]

  if (schemaType === 'post') {
    views.push(S.view
      .component(Iframe)
      .options({
        url: (doc: any) => getPreviewUrl(doc),
        loader: true,
        reload: {
          button: true,
          revision: true
        }
      })
      .title('Preview'))
  }

  return S.document().views(views)
}