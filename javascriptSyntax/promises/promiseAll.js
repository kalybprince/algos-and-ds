/* -- `Promise.all()` (Concurrent Operations)

`Promise.all()` takes an array of the Promises and returns a single
Promise.  This new Promise:

  - Resolves when *all* the Promises in the input array have resolve.  The resolved value is an array of the individual Promise results, in the same order aas the input array.
  - Rejects as soon as *any* of the Promises in the input array rejects. */

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched user ${id}`);
      resolve({ id: id, name: `User ${id}` });
    }, Math.random() * 1000 + 500); // Random delay
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched posts for user ${userId}`);
      resolve([
        { postId: 1, userId: userId },
        { postId: 2, userId: userId },
      ]);
    }, Math.random() * 1000 + 500);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched comments for post ${postId}`);
      resolve([{ commendId: 101, postId: postId }]);
    }, Math.random() * 1000 + 500);
  });
}

console.log(
  "Fetching multiple data sources concurrently with Promise.all()..."
);

Promise.all([fetchUser(1), fetchPosts(1), fetchComments(1)])
  .then(([user, posts, comments]) => {
    console.log("\nAll concurrent fetches complete!");
    console.log("User:", user), console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("One of the concurrent fetches failed:", error);
  });

/* Output: 
Fetching multiple data sources concurrently with Promise.all()...
Fetched user 1
Fetched posts for user 1
Fetched comments for post 1

All concurrent fetches complete!
User: { id: 1, name: 'User 1' }
Posts: [ { postId: 1, userId: 1 }, { postId: 2, userId: 1 } ]
Comments: [ { commentId: 101, postId: 1 } ]
*/
