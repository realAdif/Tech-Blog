const newComment = async (event)=>{
    event.preventDefault();

    const comment = document.querySelector('#comment_input').value;
    
    const response = await fetch('/api/comment/',{
        method: 'POST',
        body: JSON.stringify({comment}),
        headers:{
            'Content-Type': 'application/json',
        },
    });

};
document.querySelector('.new-comment').addEventListener('submit',newComment);

console.log("this working!!")