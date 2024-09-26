const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const sitemap = async (req, res) => {
  // An array with your links
  const links = [
    { url: "https://www.ashwink.net/", changefreq: "daily", priority: 0.9 },
   
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://www.ashwink.net/` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
export default sitemap