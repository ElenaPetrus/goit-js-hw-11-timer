// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. 
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
//  Количество дней может состоять из более чем двух цифр.


class CountdownTimer {
    constructor ({selector, targetDate}) {
        this.selector = selector,
        this.targetDate =  targetDate,
       
        this.secs = document.querySelector('[data-value="secs"]');
        this.mins = document.querySelector('[data-value="mins"]');
        this.hours = document.querySelector('[data-value="hours"]');
        this.days = document.querySelector('[data-value="days"]');
        this.timerFront= document.getElementById("timer-1")
    };
    
        setTime = setInterval(()=>{
            const  dateStart = Date.now();
            const time = this.targetDate - dateStart;
            this.updateTimerContent(time);
            this.stopTimer(time); 
        }, 1000);
     
    
      stopTimer(time) {
          if (time <= 0){
            clearInterval(this.setTime);
            this.updateTimerContent(0);
    }
      };

      updateTimerContent (time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.days.textContent = `${days}`;
        this.hours.textContent = `${hours}`;
        this.mins.textContent = `${mins}`;
        this.secs.textContent = `${secs}`;
      };

        pad(value) {
            return String(value).padStart(2, '0');
        }

};

new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Aug 20, 2021"),
  });




 





//  /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
//   /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }