import axios from "axios";

export interface Post {
    id: number
    title: string
    body: string
}

export async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data } = await axios.get<Post[]>(url);
  return data;
}
