const newComment = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').getAttribute('value');
    const comment = document.querySelector('textarea[name="comment-body"]').value;
    
   
    if (comment) {
      await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({
          post_id: parseInt(postId),
          comment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      document.location.reload();
    }
  };
  
  document.querySelector(".new-comment").addEventListener("submit", newComment);