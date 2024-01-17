export enum Genre {
  adventure = 'Aventura y acción',
  scifi = 'Ciencia ficción',
  classic = 'Clásicos',
  shortStories = 'Cuentos',
  fantasy = 'Fantasía',
  historicalFiction = 'Ficción histórica',
  horror = 'Horror',
  poetry = 'Poesía',
  romance = 'Romance',
  theatre = 'Teatro',
  thriller = 'Thriller',
  youngAdult = 'Young Adult',

  scienceAndTech = 'Ciencia y tecnología',
  economy = 'Economía',
  philoshopy = 'Filosofía y ensayos',
  history = 'Historia',
  medicine = 'Medicina y salud',
  psychology = 'Psicología',
  literaryTheory = 'Teoría literaria',
}

export function genreKeyToValueConversion(key: string): Genre {
  const genreKey: keyof typeof Genre = key as keyof typeof Genre;
  return Genre[genreKey];
}

export function genreValueToKeyConversion(value: string): Genre {
  const genreKeys = Object.keys(Genre) as (keyof typeof Genre)[];
  const key = genreKeys.find((k) => Genre[k] === value);
  return key as Genre;
}
