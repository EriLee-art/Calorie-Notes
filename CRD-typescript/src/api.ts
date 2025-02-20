// Fetches meals
export async function getNotes() {
    const response = await fetch("http://localhost:3000/meal");
    return response.json();
}

// Deletes meals
export async function deleteNotes(idToDelete: number) {
    await fetch(`http://localhost:3000/meal/` + idToDelete, {
        method: `DELETE`
    })
}

// Posts meals
export async function postNotes(noteMeal: {
  mealTime: string
  foodItem: string
  servingSize: string
  calories: number
}) {
    const response = await fetch("http://localhost:3000/meal", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(noteMeal)
    })
    return response.json();
}