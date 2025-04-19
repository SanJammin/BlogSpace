const newPost = document.getElementById("new-post");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");

let postsArray = [];

function renderPosts() {
    let html = "";
        for (let post of postsArray) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
        };
        document.getElementById("blog-list").innerHTML = html;
};

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts();
    });

newPost.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitNewPost = {
        title: postTitle.value,
        body: postBody.value
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(submitNewPost)
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post);
            renderPosts();
        })
});