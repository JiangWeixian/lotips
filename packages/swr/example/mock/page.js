export default {
  'GET /page': (req, res) => {
    return res.status(200).json({
      data: [...Array(15).keys()].map(v => ({
        id: Math.random() * 10,
      })),
      count: 100,
    })
  },
}
