import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../src/styles.css"
import "jquery/dist/jquery.js"
import { getNotes, postNotes } from "./api"
import { renderNotesList } from "./rendering"

export type Meal = {
  mealTime: string
  foodItem: string
  servingSize: string
  calories: number
  id: number
}

// Array used to display and sync data between the db.json and web page
export let mealList: Meal[] = [];

// Event listener for the form button
document.getElementById("submit-button")!.addEventListener("click", submitToDatabase);

// Creates meal
async function submitToDatabase(event: Event) {
    event.preventDefault();
    const mealTime = (document.getElementById(`mealTime`) as HTMLInputElement).value;
    const foodItem = (document.getElementById(`foodItem`) as HTMLInputElement).value;
    const servingSize = (document.getElementById(`serving`) as HTMLInputElement).value;
    const calories = (document.getElementById(`cals`) as HTMLInputElement).value;

    const meal = { 
        mealTime: mealTime, 
        foodItem: foodItem, 
        servingSize: servingSize,
        calories: parseInt(calories)
    };
    
    await postNotes(meal);
    mealList = await getNotes();
    renderNotesList();
}

// Application startup
async function startUp() {
    renderNotesList();
    mealList = await getNotes();
    renderNotesList();
}

startUp();