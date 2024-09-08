//GET REQUEST

function GET()
{
    fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            const postsContainer = document.getElementById('posts-container');
            data.posts.forEach(post => {
                postsContainer.innerHTML += `
                    <div class="post">
                        <div class="post-title">${post.title}</div>
                        <div class="post-body">${post.body}</div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching posts:', error));

}

//PATCH REQUEST

/* updating title of post with id 1 
fetch('https://dummyjson.com/posts/1', {
    method: 'PUT', /* or PATCH 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'I think I should shift to the moon',
    })
  })
  .then(res => res.json())
  .then(console.log);

*/
//POST REQUEST
function createPost(title, userId, body) 
{
    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            userId: userId,
            body: body
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('Post created:', data);
        displayResult(data);
    })
    .catch(error => {
        console.error('Error creating post:', error);
        displayResult({ error: 'Error creating post' });
    });
}


/*
//DELETE REQUEST

fetch('https://dummyjson.com/posts/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
*/