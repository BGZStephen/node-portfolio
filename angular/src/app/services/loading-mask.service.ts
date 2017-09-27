export class LoadingMaskService {

  show () {
    // if(!document.getElementsByClassName('loading-mask')) {
      const el = document.createElement('div');
      const icon = document.createElement('I')
      el.appendChild(icon)
      el.className += ' loading-mask'
      icon.className += ' fa fa-spinner fa-pulse fa-3x fa-fw';
      document.getElementsByTagName('body')[0].appendChild(el)
    // }
  }

  hide () {
    if(document.getElementsByClassName('loading-mask')) {
      document.getElementsByClassName('loading-mask')[0].remove()
      return;
    }
    return
  }
}
