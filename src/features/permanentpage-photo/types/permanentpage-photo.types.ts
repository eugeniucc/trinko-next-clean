export type SinglePhoto = {
  url: string
  pathname: string
}

export type PermanentPagePhotoResponse = {
  cards: SinglePhoto[]
  slider: SinglePhoto[]
}
