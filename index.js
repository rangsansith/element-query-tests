function minWidth(tag, number) {

  return number <= tag.offsetWidth

}

function maxWidth(tag, number) {

  return number >= tag.offsetWidth

}

function minHeight(tag, number) {

  return number <= tag.offsetHeight

}

function maxHeight(tag, number) {

  return number >= tag.offsetHeight

}

function minChildren(tag, number) {

  return number <= tag.children.length

}

function children(tag, number) {

  return number === tag.children.length

}

function maxChildren(tag, number) {

  return number >= tag.children.length

}

function minCharacters(tag, number) {

  return number <= ((tag.value && tag.value.length) || tag.textContent.length)

}

function characters(tag, number) {

  return number === ((tag.value && tag.value.length) || tag.textContent.length)

}

function maxCharacters(tag, number) {

  return number >= ((tag.value && tag.value.length) || tag.textContent.length)

}

function minScrollX(tag, number) {

  return number <= tag.scrollLeft

}

function maxScrollX(tag, number) {

  return number >= tag.scrollLeft

}

function minScrollY(tag, number) {

  return number <= tag.scrollTop

}

function maxScrollY(tag, number) {

  return number >= tag.scrollTop

}

function minAspectRatio(tag, number) {

  return number <= tag.offsetWidth / tag.offsetHeight

}

function maxAspectRatio(tag, number) {

  return number >= tag.offsetWidth / tag.offsetHeight

}

function orientation(tag, string) {

  switch (string) {
    case 'portrait': return tag.offsetWidth < tag.offsetHeight
    case 'square': return tag.offsetWidth === tag.offsetHeight
    case 'landscape': return tag.offsetWidth > tag.offsetHeight
  }

}

module.exports = {minWidth, maxWidth, minHeight, maxHeight, minChildren, children, maxChildren, minCharacters, characters, maxCharacters, minScrollX, maxScrollX, minScrollY, maxScrollY, minAspectRatio, maxAspectRatio, orientation}