export default function handler(req, res) {
  res.clearPreviewData({ enable: false });
  res.redirect(req.query.redirect);
}
