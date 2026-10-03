async function checkBackend() {
    try {
        const response = await fetch('http://localhost:3000/api/health');
        const data = await response.json();

        document.getElementById('message').innerText = data.message;
    } catch (error) {
        document.getElementById('message').innerText =
            'Backend connection failed';
    }
}