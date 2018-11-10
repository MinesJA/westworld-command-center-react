export class Log {
  static error(msg){
    let date = new Date();
    let time = date.toLocaleTimeString();
    return {type: 'error', msg: `[${time}] ERROR: ${msg}`}
  }

  static warn(msg){
    let date = new Date();
    let time = date.toLocaleTimeString();
    return {type: 'warn', msg: `[${time}] WARN: ${msg}`}
  }

  static notify(msg){
    let date = new Date();
    let time = date.toLocaleTimeString();
    return {type: 'notify', msg: `[${time}] NOTIFY: ${msg}`}
  }
}
