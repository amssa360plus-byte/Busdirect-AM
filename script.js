let resirvation = []
const reserveForm = document.querySelector('#reserve-form');
const reserveNameInput = document.querySelector('#reserve-name');
const reserveSeatSelect = document.querySelector('#reserve-seat');
const reserveNotification = document.querySelector('#reserve-notification');
const ticketPreview = document.querySelector('#ticket-preview');
const NameRev = document.querySelector('#namerev')

const resvplace01 = document.querySelector('#place01')
const resvplace02 = document.querySelector('#place02')
const resvplace03 = document.querySelector('#place03')
const resvplace04 = document.querySelector('#place04')
const resvplace05 = document.querySelector('#place05')
const resvplace06 = document.querySelector('#place06')
const resvplace07 = document.querySelector('#place07')
const resvplace08 = document.querySelector('#place08')
const resvplace09 = document.querySelector('#place09')
const resvplace10 = document.querySelector('#place10')
const resvplace11 = document.querySelector('#place11')
const resvplace12 = document.querySelector('#place12')
const resvplace13 = document.querySelector('#place13')
const resvplace14 = document.querySelector('#place14')
const resvplace15 = document.querySelector('#place15')
const resvplace16 = document.querySelector('#place16')
const resvplace17 = document.querySelector('#place17')
const resvplace18 = document.querySelector('#place18')
const resvplace19 = document.querySelector('#place19')
const resvplace20 = document.querySelector('#place20')


const lib01 = document.querySelector('#libre01')
const lib02 = document.querySelector('#libre02')
const lib03 = document.querySelector('#libre03')
const lib04 = document.querySelector('#libre04')
const lib05 = document.querySelector('#libre05')
const lib06 = document.querySelector('#libre06')
const lib07 = document.querySelector('#libre07')
const lib08 = document.querySelector('#libre08')
const lib09 = document.querySelector('#libre09')
const lib10 = document.querySelector('#libre10')
const lib11 = document.querySelector('#libre11')
const lib12 = document.querySelector('#libre12')
const lib13 = document.querySelector('#libre13')
const lib14 = document.querySelector('#libre14')
const lib15 = document.querySelector('#libre15')
const lib16 = document.querySelector('#libre16')
const lib17 = document.querySelector('#libre17')
const lib18 = document.querySelector('#libre18')
const lib19 = document.querySelector('#libre19')
const lib20 = document.querySelector('#libre20')





reserveForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const passengerName = reserveNameInput.value.trim();
    const selectedSeat = reserveSeatSelect.value;

    if (passengerName === '') {
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
    if (reserveSeatSelect.value === "1") {
    resvplace01.style.backgroundColor = "red";
    lib01.remove("span")
    NameRev.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    
}    
      if (reserveSeatSelect.value === "2") {
    resvplace02.style.backgroundColor = "red";
        lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}   
      if (reserveSeatSelect.value === "3") {
    resvplace03.style.backgroundColor = "red";
        lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}
      if (reserveSeatSelect.value === "4") {
    resvplace04.style.backgroundColor = "red"=2
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}    
      if (reserveSeatSelect.value === "5") {
    resvplace05.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}  
      if (reserveSeatSelect.value === "6") {
    resvplace06.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}
        if (reserveSeatSelect.value === "7") {
    resvplace07.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}    
      if (reserveSeatSelect.value === "8") {
    resvplace08.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}   
       if (reserveSeatSelect.value === "9") {
    resvplace09.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "10") {
    resvplace10.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "11") {
    resvplace11.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "12") {
    resvplace12.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "13") {
    resvplace13.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}


  if (reserveSeatSelect.value === "14") {
    resvplace14.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
} 

  if (reserveSeatSelect.value === "15") {
    resvplace15.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}
   

  if (reserveSeatSelect.value === "16") {
    resvplace16.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}
   
  if (reserveSeatSelect.value === "17") {
    resvplace17.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "18") {
    resvplace18.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "19") {
    resvplace19.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}

  if (reserveSeatSelect.value === "20") {
    resvplace20.style.backgroundColor = "red";
     lib01.remove("span")
    `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
}
 
    
    ticketPreview.classList.remove('hidden');
});