// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  res.status(200).json({
    "apps": [
      {
        "name": "Shu l Akhbar",
        "icon": "\\icons\\icon.png",
        "url": "shu-l-akhbar",
        "package": "com.shu_l_akhbar.app"
      },
      {
        "name": "Samsung Notes",
        "icon": "\\icons\\icon.png",
        "url": "samsung-notes",
        "package": "com.samsung.android.app.notes"
      }
    ],
    "count": 2
  })
}
