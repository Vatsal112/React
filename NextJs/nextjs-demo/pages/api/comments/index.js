import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newData = {
      id: new Date().getMilliseconds(),
      text: comment,
    };
    comments.push(newData);
    return res.status(201).json(newData);
  }
}
