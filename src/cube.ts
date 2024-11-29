function cube<T extends number>(value: T): T {
  return (value ** 3) as T;
}

export function cubeTest() {
  const integerArray: number[] = [1, 2, 3, 4, 5];
  const floatArray: number[] = [1.1, 2.2, 3.3, 4.4, 5.5];

  console.log("Массив целых чисел:", integerArray);
  const integerCubes = integerArray.map(cube);
  console.log("Кубы целых чисел:", integerCubes);

  console.log("Массив вещественных чисел:", floatArray);
  const floatCubes = floatArray.map(cube);
  console.log("Кубы вещественных чисел:", floatCubes);
}
