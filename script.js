let resirvation = []
const reserveForm = document.querySelector('#reserve-form');
const reserveNameInput = document.querySelector('#reserve-name');
const reserveSeatSelect = document.querySelector('#reserve-seat');
const reserveNotification = document.querySelector('#reserve-notification');
const ticketPreview = document.querySelector('#ticket-preview');




const NameRev01 = document.querySelector('#namerev01')
const NameRev02 = document.querySelector('#namerev02')
const NameRev03 = document.querySelector('#namerev03')
const NameRev04 = document.querySelector('#namerev04')
const NameRev05 = document.querySelector('#namerev05')
const NameRev06 = document.querySelector('#namerev06')
const NameRev07 = document.querySelector('#namerev07')
const NameRev08 = document.querySelector('#namerev08')
const NameRev09 = document.querySelector('#namerev09')
const NameRev10 = document.querySelector('#namerev10')
const NameRev11 = document.querySelector('#namerev11')
const NameRev12 = document.querySelector('#namerev12')
const NameRev13 = document.querySelector('#namerev13')
const NameRev14 = document.querySelector('#namerev14')
const NameRev15 = document.querySelector('#namerev15')
const NameRev16 = document.querySelector('#namerev16')
const NameRev17 = document.querySelector('#namerev17')
const NameRev18 = document.querySelector('#namerev18')
const NameRev19 = document.querySelector('#namerev19')
const NameRev20 = document.querySelector('#namerev20')


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


const mo_modifie = document.querySelector('#modify-passenger')




reserveForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const passengerName = reserveNameInput.value.trim();
    const selectedSeat = reserveSeatSelect.value;
    const id = selectedSeat.padStart(2, '0');
    const targetSeat = document.querySelector(`#place${id}`);

    if (targetSeat.style.backgroundColor === "red") {
        reserveNotification.innerHTML = '<p class="text-red-500 text-sm font-medium">the place resrvie</p>';
        ticketPreview.classList.add('hidden');
        return;
    }
    

    

    if (passengerName === '') {
        reserveNotification.innerHTML = '<p class="text-red-500 text-sm font-medium">Please enter passenger name!</p>';
        ticketPreview.classList.add('hidden');
        return;
    }
    


    const id = selectedSeat.padStart(2, '0');
    const targetSeat = document.querySelector(`#place${id}`);

    if (targetSeat.style.backgroundColor === "red") {
        reserveNotification.innerHTML = '<p class="text-red-500 text-sm font-medium">the place resrvie</p>';
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
    lib01.remove("span");
    NameRev01.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage01">${passengerName}</option>`;
    
}    
      if (reserveSeatSelect.value === "2") {
    resvplace02.style.backgroundColor = "red";
    lib02.remove("span");
    NameRev02.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage02">${passengerName}</option>`;
}   
      if (reserveSeatSelect.value === "3") {
    resvplace03.style.backgroundColor = "red";
    lib03.remove("span");
    NameRev03.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
        mo_modifie.innerHTML += `<option id="siage03">${passengerName}</option>`;

}
      if (reserveSeatSelect.value === "4") {
    resvplace04.style.backgroundColor = "red";
    lib01.remove("span");
     NameRev04.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage04">${passengerName}</option>`;
}    
      if (reserveSeatSelect.value === "5") {
    resvplace05.style.backgroundColor = "red";
    lib05.remove("span");
     NameRev05.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage05">${passengerName}</option>`;
}  
      if (reserveSeatSelect.value === "6") {
    resvplace06.style.backgroundColor = "red";
    lib06.remove("span");
     NameRev06.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML = `<option id="siage06">${passengerName}</option>`;
}
        if (reserveSeatSelect.value === "7") {
    resvplace07.style.backgroundColor = "red";
    lib07.remove("span");
     NameRev07.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage07">${passengerName}</option>`;
}    
      if (reserveSeatSelect.value === "8") {
    resvplace08.style.backgroundColor = "red";
    lib08.remove("span");
     NameRev08.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage08">${passengerName}</option>`;
}   
       if (reserveSeatSelect.value === "9") {
    resvplace09.style.backgroundColor = "red";
    lib09.remove("span");
     NameRev09.innerHTML =`
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage09">${passengerName}</option>`;
}

  if (reserveSeatSelect.value === "10") {
    resvplace10.style.backgroundColor = "red";
    lib09.remove("span");
     NameRev10.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage10">${passengerName}</option>`;
}

  if (reserveSeatSelect.value === "11") {
    resvplace11.style.backgroundColor = "red";
    lib11.remove("span");
     NameRev11.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage11">${passengerName}</option>`;
}

  if (reserveSeatSelect.value === "12") {
    resvplace12.style.backgroundColor = "red";
    lib12.remove("span");
     NameRev12.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage12">${passengerName}</option>`;
}

  if (reserveSeatSelect.value === "13") {
    resvplace13.style.backgroundColor = "red";
    lib13.remove("span");
     NameRev13.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage13">${passengerName}</option>`;

}


  if (reserveSeatSelect.value === "14") {
    resvplace14.style.backgroundColor = "red";
    lib14.remove("span");
     NameRev14.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
     mo_modifie.innerHTML += `<option id="siage14">${passengerName}</option>`;

} 

  if (reserveSeatSelect.value === "15") {
    resvplace15.style.backgroundColor = "red";
    lib15.remove("span");
     NameRev15.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage15">${passengerName}</option>`;

}
   

  if (reserveSeatSelect.value === "16") {
    resvplace16.style.backgroundColor = "red";
    lib16.remove("span");
     NameRev16.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
     mo_modifie.innerHTML += `<option id="siage16">${passengerName}</option>`;

}
   
  if (reserveSeatSelect.value === "17") {
    resvplace17.style.backgroundColor = "red";
    lib17.remove("span");
     NameRev17.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
     mo_modifie.innerHTML += `<option id="siage17">${passengerName}</option>`;

}

  if (reserveSeatSelect.value === "18") {
    resvplace18.style.backgroundColor = "red";
    lib18.remove("span");
     NameRev18.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage18">${passengerName}</option>`;

}

  if (reserveSeatSelect.value === "19") {
    resvplace19.style.backgroundColor = "red";
    lib19.remove("span");
     NameRev19.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
     mo_modifie.innerHTML += `<option id="siage19">${passengerName}</option>`;

}

  if (reserveSeatSelect.value === "20") {
    resvplace20.style.backgroundColor = "red";
    lib20.remove("span");
     NameRev20.innerHTML = `
        <div class="">
            <p class="text-slate-700"> ${passengerName}</p>
        </div>
    `;
    mo_modifie.innerHTML += `<option id="siage20">${passengerName}</option>`;

}
 
    
    ticketPreview.classList.remove('hidden');
});










const switch_notification = document.querySelector('#switch-notification');

const modifie = document.querySelector('#modify-botton');


modifie.addEventListener('modify-botton', function(){
    e.preventDefault();
    const namemo = document.querySelector('#modify-name')
     if (namemo === '') {
        switch_notification.innerHTML = '<p class="text-red-500 text-sm font-medium">Please enter passenger name!</p>'
        return;
    }
})