'use-client';

import { getSession } from "next-auth/client";

let db: any;

// const openRequest = indexedDB.open('readingList', 1);

// openRequest.onupgradeneeded = function (e:any) {
//     db = e.target.result;
//     console.log('running onupgradeneeded');
//     const storeOS = db.createObjectStore('bookmarkedBlogs',  {keyPath: "blogs"});

//  };
// openRequest.onsuccess = function (e:any) {
//     console.log('running onsuccess');
//     db = e.target.result;
// };
// openRequest.onerror = function (e) {
//     console.log('onerror! doesnt work');
// };

const openDB = async () => {
  return new Promise(async (resolve, reject) => {
    const openRequest = indexedDB.open('readingList', 1);

    openRequest.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("readingList")) {
        db.createObjectStore("readingList", { keyPath: 'id', autoIncrement: true });
      }
    };

    openRequest.onsuccess = (event: any) => {
      resolve(event.target.result);
    };

    openRequest.onerror = (event: any) => {
      reject(event.target.error);
    };
  });
};


export async function addBlogToReadingList(slug: string, userId: number) {
  const db: any = await openDB()
  const tx = await db.transaction(["readingList"], "readwrite");
  const store = await tx.objectStore("readingList")
  const data = await store.add({ slug, userId });
  return data;
}
export async function getReadingListData() {
  return new Promise<any>(async (resolve, reject) => {
    const db: any = await openDB()
    const tx = await db.transaction(["readingList"]);
    const store = await tx.objectStore("readingList").getAll()

    store.onsuccess = () => {
      resolve(store.result);
    }
  })
}

export async function getBlogBasedOnUserId(userId: number) {
  const data = await getReadingListData();

  const t = data
    .filter((d: any) => d.userId === userId)
    .map((d: any) => {
      return {
        slug:d.slug, 
        id:d.id
      }
    });
  return t;
}

export async function removeBlogFromList(id:number){
  const db: any = await openDB()
  const tx = await db.transaction(["readingList"], "readwrite");
  const store = await tx.objectStore("readingList")
  const data = await store.delete(id);
}