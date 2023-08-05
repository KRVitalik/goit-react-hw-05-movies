export async function getMovie() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmZkYjkxMjcyMjg3MGUyMzg4ZGQ0MzU3ODJjYTU2ZiIsInN1YiI6IjY0Y2NmNzU0NzY0Yjk5MDBlM2JhNWFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.In4jq0rW_1654XErrGjwD7GHNgYJB4wzMI8zmAAIdDg'
            }
        };
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    return await response.json();
            
}
    