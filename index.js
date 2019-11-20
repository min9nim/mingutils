exports.getNewName = function getNewName(name, names) {
  if(!names.includes(name)){
    return name
  }
  const reg = /.+\((\d)\)/
  let newName = ''
  if(reg.test(name)){
    newName = name.replace(reg, (_, p1) => {
      return name.replace(p1, String(Number(p1) + 1))
    })
  }else{
    newName = name + '(2)'
  }
  return getNewName(newName, names)
}
