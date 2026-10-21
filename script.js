let resirvation = []
const reserveForm = document.querySelector('#reserve-form');
const reserveNameInput = document.querySelector('#reserve-name');
const reserveSeatSelect = document.querySelector('#reserve-seat');
const reserveNotification = document.querySelector('#reserve-notification');
const ticketPreview = document.querySelector('#ticket-preview');

reserveForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const passengerName = reserveNameInput.value.trim();
    const selectedSeat = reserveSeatSelect.value;

    if (!passengerName) {
        reserveNotification.innerHTML = '<p class="text-red-500 text-sm font-medium">Please enter passenger name!</p>';
        ticketPreview.classList.add('hidden');
        return;
    }

    reserveNotification.innerHTML = '';

    ticketPreview.innerHTML = `
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm space-y-1">
            <p class="font-bold text-slate-900">Ticket Confirmed 🎉</p>
            <p class="text-slate-700"><strong>Passenger:</strong> ${passengerName}</p>
            <p class="text-slate-700"><strong>Seat:</strong> ${selectedSeat ? 'Seat ' + selectedSeat : 'No seat selected'}</p>
            <p class="text-teal-600 font-semibold pt-1">Price: 80 DH</p>
        </div>
    `;
    
    ticketPreview.classList.remove('hidden');
});