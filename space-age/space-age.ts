const orbitRatio: Record<string, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_YEAR_SECONDS = 31557600;

type Planet = keyof typeof orbitRatio;

export function age(planet: Planet, seconds: number): number {
  const earthAge = seconds / EARTH_YEAR_SECONDS;
  const planetAge = earthAge / orbitRatio[planet];
  return Number(planetAge.toFixed(2));
}
