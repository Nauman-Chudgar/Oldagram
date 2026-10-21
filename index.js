const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById("main")
const header = document.getElementById("header")

function renderHeader()
{
    header.innerHTML =
        `<img src="images/logo.png" class="logo-img">
         <img src="images/guide.jpg" class="profile-img">`
}

function renderPost(value)
{
    main.innerHTML +=        
            `<div class="send">
                <section class="profile">
                    <img src="${value.avatar}" class="profile-img">
                    <div>
                        <span>${value.name}</span>
                        <p>${value.location}</p>
                    </div>
                </section>

                <img src="${value.post}" class="post-img">

                <section class="foot">
                    <div class="icon-con">
                        <img src="images/icon-heart.png" class="icons">
                        <img src="images/icon-dm.png" class="icons">
                        <img src="images/icon-comment.png" class="icons">
                    </div>
                    <div class="foot">
                        <span>${value.likes} likes</span>
                        <p><span>${value.username}</span> ${value.comment}</p>    
                    </div>
                </section>
            </div>`
}


renderHeader()
renderPost(posts[0])
renderPost(posts[1])
renderPost(posts[2])
