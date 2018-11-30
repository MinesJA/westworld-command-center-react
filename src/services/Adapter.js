const URL = "http://localhost:4000/"

export class Adapter {

  static fetchHosts(){
    return fetch(URL + "hosts")
			.then(res => res.json())
  }

  static fetchAreas(){
    return fetch(URL + "areas")
      .then(res => res.json())
  }

}


import { Adapter } from '/services/Adapter';

Adapter.fetchHosts()
  .then(res => th)
