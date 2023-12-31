import { Post } from "@prisma/client";
import prisma from "../database/database";
// import db from "../database/database";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const result = await prisma.post.findMany()
  return result;
}

async function getPost(id: number) {
  const post = await prisma.post.findUnique({
    where: { id }
  })

  return post;
}

async function createPost(post: CreatePost) {
  const result = await prisma.post.create({
    data: post
  });

  return result;
}

async function deletePost(id: number) {
  const result = await prisma.post.delete({
    where: { id }
  });

  return result;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;