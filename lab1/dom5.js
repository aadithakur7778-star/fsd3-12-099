import {EventEmitter} from 'events';
 // extend mtlb hota hai ki EventEmitter class ke sare properties aur methods ko hum apne
 //  class me use kar sakte hai
class DomClass extends EventEmitter{
    addEventListener(eventName,callback){
        this.on(eventName,callback);
    }
    removeEventListener(eventName,callback){
        this.off(eventName,callback);
    }
    dispatchEvent(eventName,eventData={}){
        const event ={
            type: eventName,
            timeStamp: new Date(),
            ...eventData,
            
        };
        this.emit(eventName,event);
    }

}

    const button = new DomClass();
    const handleClick = (event) => {
        console.log(`Button clicked type ${event.type} at ${event.timeStamp}`);

    }
    button.addEventListener('click', handleClick);
    button.dispatchEvent('click',{
        target: "submitBtn"
    });
    button.removeEventListener('click',handleClick);
    button.dispatchEvent('click',{
        target: "resetBtn"
    });
   
