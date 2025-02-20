import { mealList, Meal } from "./main";
import { deleteNotes } from "./api";
import { formDefault } from "./formreset";

// Used in the rendering of meals
const notesContainer = document.getElementById(`notes`) as HTMLDivElement;

// Renders the individual meals from the mealList
export function renderNotes(meal: Meal) {
    const mealDiv = document.createElement("div");
    mealDiv.innerHTML = `
    <div id="mealNotes" class="mb-3 p-4">
        <h5 class="mb-3">${meal.id}) ${meal.foodItem} - ${meal.mealTime}</h5>
        <p>${meal.servingSize} Per Serving</p>
        <p>${meal.calories} Calories</p>
        <button id="delete-button" class="btn btn-danger ms-3">Delete</button>
    </div>`

    mealDiv.querySelector(`#delete-button`)!.addEventListener(`click`, async () => {
        await deleteNotes(meal.id);

        const indexToDelete = mealList.indexOf(meal);
        mealList.splice(indexToDelete, 1);

        renderNotesList();
    })
    return mealDiv
}



// Renders all the meals from mealList
export function renderNotesList() {
  notesContainer.innerHTML = "";
  
  mealList.map(renderNotes).forEach(div => notesContainer.appendChild(div));
  formDefault();
}