// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function blog(req, res) {
  axios.get('https://tif-react-assignment-api.herokuapp.com/blog/get-all')
  .then(({ data }) => res.status(200).json(data) )
  .catch(err => res.status(500).json(err))
}
