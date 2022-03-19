import axios from "axios"
export default async (userID) => {
    const { data:users } = await axios("https://jsonplaceholder.typicode.com/users/" + userID);
    const { data:posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userID);

    return { users, posts };
}