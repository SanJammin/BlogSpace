fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5);

        postsArr.forEach((post) => {
            const postTitle = document.createElement("h3");
            const postBody = document.createElement("p");

            postTitle.textContent = post.title;
            postBody.textContent = post.body;

            document.getElementById("blog-posts").appendChild(postTitle);
            document.getElementById("blog-posts").appendChild(postBody);
        });
    });