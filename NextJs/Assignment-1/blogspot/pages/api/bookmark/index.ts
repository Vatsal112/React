import { getBookmarkBlogs } from "@/utils/blogFetcher";

export default async function handler(req: any, res: any) {
    const data = await getBookmarkBlogs(req.body)
    console.log(data)
    res.json({ message: 'ok' });
}

