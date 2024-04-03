export function splitPosts(posts, divisor = 7) {
    const splitedPosts = []
    for (let i = 0; i < divisor; i++) {
        splitPosts[i] = []
    }
    for (let i = 0; i < posts.length; i++) {
        splitedPosts[i % divisor].push(posts[i])
    }
    return splitPosts
}