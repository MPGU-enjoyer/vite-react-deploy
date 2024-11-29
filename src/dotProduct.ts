function dotProduct<T extends number>(
  vector1: T[],
  vector2: T[]
): { scalarProduct: number; min: number; max: number } {
  if (vector1.length !== vector2.length) {
    throw new Error("Векторы должны иметь одинаковую длину");
  }

  if (vector1.length > 10) {
    throw new Error("Длина вектора не должно превосходить 10.");
  }

  const products = vector1.map((u, i) => u * vector2[i]);
  const scalarProduct = products.reduce((acc, value) => acc + value, 0);
  const min = Math.min(...products);
  const max = Math.max(...products);

  return {
    scalarProduct,
    min,
    max,
  };
}

export function dotProductTest() {
  const vector1 = [1, 2, 3, 4, 5];
  const vector2 = [5, 4, 3, 2, 1];

  try {
    console.log(`Векторы: ${vector1} и ${vector2}`);
    const { scalarProduct, min, max } = dotProduct(vector1, vector2);
    console.log("Скалярное произведение:", scalarProduct);
    console.log("Минимальное произведение:", min);
    console.log("Максимальное произведение:", max);
  } catch (error) {
    console.error(error);
  }
}
