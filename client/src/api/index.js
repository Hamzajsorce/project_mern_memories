import axios from "axios";

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newRecord) => axios.post(url, newRecord);
export const likePost = (id) => axios.patch(`${url}${id}/likePost`);
export const updatePost = (id, updatedRecord) => axios.patch(`${url}/${id}`, updatedRecord);
export const deletePost = (id) => axios.delete(`${url}/${id}`);