
const donationContainer = document.getElementById('donation-container');

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', function(){
    window.location.href = '/blog.html';
})

document.getElementById('donation-container-btn').addEventListener('click', function(){
    donationContainer.classList.remove('hidden');
    document.getElementById('donation-container-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-container').classList.add('hidden')
})

document.getElementById('history-btn').addEventListener('click', function(){
    
    donationContainer.classList.add('hidden');
    document.getElementById('donation-container-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-container').classList.remove('hidden')
    
})

