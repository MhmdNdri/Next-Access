// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const locale = req.headers["accept-Language"] || "en";
  res.statusCode = 200;
  res.json({ name: `John Doe ${locale}` });
};
