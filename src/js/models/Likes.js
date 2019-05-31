export class Likes {
  constructor() {    
    this.likes = [];
  }

  addLike(id, title, area, image) {
    const like = {id, title, area, image};
    this.likes.push(like);
    this.storeLikes();
    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(like => like.id === id);
    this.likes.splice(index, 1);
    this.storeLikes();
  }

  isLiked(id) {
    return this.likes.findIndex(like => like.id === id) !== -1;
  }

  getNumLikes() {
    return this.likes.length;
  }

  storeLikes() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }

  getLikesFromLS() {
    const storage = JSON.parse(localStorage.getItem('likes'));
    if (storage) this.likes = storage;
  }
}