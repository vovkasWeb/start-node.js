import Post from "./post.js";
class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }
  async getAll() {
   
      const posts = await Post.find();
      return posts;
   
  }
  async getOne(id) {
      if (!id) {
        throw new Error("айди не передан");
      }
      const post = await Post.findById(id);
      return post
    
  }
  async update(post) {
    
      if (!post._id) {
        throw new Error("айди не передан");
      }
      const updatePost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return updatePost;
   
  }
  async delete(id) {
      if (!id) {
        throw new Error("айди не передан");
      }
      const post = await Post.findByIdAndDelete(id);
      return post;
   
  }
}
export default new PostService();
