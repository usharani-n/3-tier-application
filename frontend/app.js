async function checkBackend() {
    try {
        const response = await fetch('http://localhost:3000/api/database');
        const data = await response.json();

        document.getElementById('message').innerText =
            data.message + " | Users: " + data.users.length;
    } catch (error) {
        document.getElementById('message').innerText =
            'Backend connection failed';
    }
}