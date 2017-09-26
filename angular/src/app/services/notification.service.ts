export class NotificationService {

/*
  * config: {
  * message: message
  * timer: 1000 ms
  * }
*/
  success (config) {
    config.duration = config.duration || 1800
    const el = document.createElement('P');
    const icon = document.createElement('I')
    const text = document.createTextNode(config.message);
    el.appendChild(icon)
    el.appendChild(text)
    el.className += ' notification-service-output notification-service-success'
    icon.className += ' fa fa-check';
    document.getElementsByTagName('body')[0].appendChild(el)
    setTimeout(function() {
      document.getElementsByClassName('notification-service-output')[0].remove()
    }, config.duration)
  }

  error (config) {
    config.duration = config.duration || 1800
    const el = document.createElement('P');
    const icon = document.createElement('I')
    const text = document.createTextNode(config.message);
    el.appendChild(icon)
    el.appendChild(text)
    el.className += ' notification-service-output notification-service-error'
    icon.className += ' fa fa-exclamation-triangle';
    document.getElementsByTagName('body')[0].appendChild(el)
    setTimeout(function() {
      document.getElementsByClassName('notification-service-output')[0].remove()
    }, config.duration)
  }
}
