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


export class Format {

  static areas(areas){
    return areas.map( area => {
      let formattedName = area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
      area["namesObject"] = {key: area.name, text: formattedName, value: area.name}
      return area
    })
  }

}
