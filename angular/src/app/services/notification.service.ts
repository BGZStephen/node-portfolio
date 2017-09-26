export class NotificationService {

/*
  * config: {
  * message: message
  * timer: 1000 ms
  * type: success, info
  * }
*/
  show (config) {
    const el = document.createElement('P');
    const text = document.createTextNode(config.message);
    el.appendChild(text)
    el.className += ' notification-service-output notification-service-success'
    document.getElementsByTagName('body')[0].appendChild(el)
    console.log(config.message);
  }
}
