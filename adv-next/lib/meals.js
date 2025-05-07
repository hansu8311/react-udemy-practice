import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  return db.prepare("INSERT INTO meals VALUE").get(slug);
}
