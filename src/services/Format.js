export class Format {

  static areas(areas){
    return areas.map( area => {
      let formattedName = area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
      area["namesObject"] = {key: area.name, text: formattedName, value: area.name}
      return area
    })
  }

}
