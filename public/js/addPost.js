const newCommentHandler = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const post = document.querySelector('#post-text').value.trim();
    console.log("This function is working");
    if(title && post){
        const response = await fetch('/api/post',{
            method: 'POST',
            body: JSON.stringify({title, post}),
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