const newCommentHandler = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const postContent = document.querySelector('#post-text').value.trim();
    
    if(title && postContent){
        const response = await fetch('/api/post',{
            method: 'POST',
            body: JSON.stringify({title, postContent}),
            headers:{
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog');
        }
    }
};
document.querySelector('.new-post-form').addEventListener('submit',newCommentHandler);