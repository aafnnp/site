import { fetcher } from 'utils';
export default async function handler(req, res) {
  // if (req.method === 'POST') {
  //   try {
  //     const { authorization } = req.headers;

  //     if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
  //       res.status(200).json({ success: true });
  //     } else {
  //       res.status(401).json({ success: false });
  //     }
  //   } catch (err) {
  //     res.status(500).json({ statusCode: 500, message: err.message });
  //   }
  // } else {
  //   res.setHeader('Allow', 'POST');
  //   res.status(405).end('Method Not Allowed');
  // }
  fetcher('http://finance.sina.com.cn/7x24/').then((response) => {
    console.log(res);
    res.status(200).json({ success: true, data: response });
  });
}
