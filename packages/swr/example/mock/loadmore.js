export default {
  'GET /loadmore': (req, res) => {
    return res.status(200).json({
      data: [...Array(15).keys()].map(v => ({
        id: Math.random() * 10,
      })),
      loadMoreKey: Math.random() * 100,
    })
  },
}
