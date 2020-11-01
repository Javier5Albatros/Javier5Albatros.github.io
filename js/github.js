export const getStars = (user, repo) => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then(res => res.json())
    .then(data => {
        let span = document.querySelector("#estrellas");
        span.innerHTML = data.stargazers_count;
    })
}