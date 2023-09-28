const axios = require('axios');
const cheerio = require('cheerio');

async function TiktokDownloader(Url) {
  let e = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
  return (
    (result = {}),
    (result.title = e.data.desc),
    (result.author = e.data.author),
    (result.nowm = e.data.links[0].a),
    (result.watermark = e.data.links[1].a),
    (result.audio = e.data.links[2].a),
    (result.thumbnail = e.data.cover),
    result
  );
}

module.exports = { TiktokDownloader}
