document.addEventListener("DOMContentLoaded",() => {
    const internet = window.navigator.onLine;
    if(!internet) {
        alert("Not Connected");
        window.location.href = '/';
    }    
});

const maxAttempts = 3;
const lockoutDuration = 60 * 60 * 1000;

function checkLockout() {
    const lockoutInfo = JSON.parse(localStorage.getItem('lockoutInfo'));
    if (lockoutInfo) {
        const { attempts, timestamp } = lockoutInfo;
        const currentTime = Date.now();
        if (currentTime < timestamp + lockoutDuration) {
            const remainingTime = Math.ceil((timestamp + lockoutDuration - currentTime) / 1000);
            document.getElementById('message').textContent = `Too many failed attempts. Please try again in ${remainingTime} seconds.`;
            document.getElementById('loginForm').style.display = 'none';
            return true;
        } else {
            localStorage.removeItem('lockoutInfo');
        }
    }
    return false; 
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (checkLockout()) return; 

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === 'admin@gmail.com' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        localStorage.removeItem('lockoutInfo'); 
    } else {
        let attempts = 1; 
        const lockoutInfo = JSON.parse(localStorage.getItem('lockoutInfo'));

        if (lockoutInfo) {
            attempts = lockoutInfo.attempts + 1; 
        }

        if (attempts < maxAttempts) {
            localStorage.setItem('lockoutInfo', JSON.stringify({ attempts, timestamp: lockoutInfo ? lockoutInfo.timestamp : Date.now() }));
            document.getElementById('message').textContent = `Login failed. You have ${maxAttempts - attempts} attempts left.`;
        } else {
            localStorage.setItem('lockoutInfo', JSON.stringify({ attempts, timestamp: Date.now() }));
            document.getElementById('message').textContent = 'Maximum attempts reached. You are locked out for 1 hour.';
            document.getElementById('loginForm').style.display = 'none';
        }
    }
});

window.onload = checkLockout;
