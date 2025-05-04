async function getData() {
    // fetch users
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    // fetch posts
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    // fetch comments
    const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments");

    // convert to json
    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    const tableBody = document.querySelector("tbody");

    users.forEach(user => {
        // get the posts of the user
        const userPosts = posts.filter(post => post.userId === user.id);
        const postsList = document.createElement("ul");

        // get the comments of the post
        userPosts.forEach(post => {
            const postComments = comments.filter(comment => comment.postId === post.id);
            const li = document.createElement("li");
            li.textContent = post.title + `${postComments.length} comment`;
            postsList.appendChild(li);
        });
        const row = document.createElement("tr");
        row.innerHTML = `<td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.company.name}</td>
          <td>${user.address.geo.lat}, ${user.address.geo.lng}</td>
          <td></td>
        `;

        row.children[4].appendChild(postsList);
        tableBody.appendChild(row);
    });

}

getData();
