import { elements } from './base';

export const toggleLikeBtn = (isLiked) => {
  const iconString = isLiked ? 'fas' : 'far';
  document.querySelector('.recipe-love').innerHTML = `<i class="${iconString} fa-heart"></i>`;
}


// visibility of the Likes menu
export const toggleLikeMenu = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
}

export const renderLike = like => {
  const html = `
        <li>
            <a href="#${like.id}" class="d-flex likes-link">
                <img src="${like.image}" alt="">
                <div class="likes-data">
                    <h6>${like.title}</h6>
                    <p><em>${like.area}</em></p>
                </div>                    
            </a>
        </li>  
  `;
  elements.likesList.insertAdjacentHTML('beforeend', html);
};

export const deleteLike = id => {
  if (document.querySelector(`.likes-link[href="#${id}"]`)) {
    document.querySelector(`.likes-link[href="#${id}"]`).parentElement.remove();
  }
}