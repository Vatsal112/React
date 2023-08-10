import { getSingleBlog } from "@/utils/blogFetcher";
import { getSession, useSession } from "next-auth/client"

export default function index({bookmarks}:any) {
    console.log(bookmarks)

  return (
    <div>
        <h2>Bookmarked Blogs</h2>
    </div>
  )
}

export async function getServerSideProps(context:any){
    const session:any = await getSession(context);
    const getSlugs = localStorage.getItem(session.user.id);
    if(getSlugs! == ''){
        const data = getSlugs.split(',');
        let response:any = [];
        if(data.length > 0){
            data.map(async (d)=>{
                let blog = await getSingleBlog(d);
                response.push(blog);
            })
            return{
                props:{
                    bookmarks: response
                }
            }
        }
    }
}
