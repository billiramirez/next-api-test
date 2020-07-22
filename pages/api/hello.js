// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 200;
    res.json({ name: "John Doe" });
  }
  return res.status(404).json({
    error: {
      code: "not_found",
      message: "The requested endpoint does not exist",
    },
  });
};
