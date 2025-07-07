import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
    const [ingredients, setIngredients] = useState(Array<string>);
    const [res, setRes] = useState("");

    // function handleSubmit(event: any) {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     let newIngredient = formData.get("ingredient") as string;
    //     setIngredient(oldIngredient => [...oldIngredient, <li>{newIngredient}</li>]);
    //     event.currentTarget.reset();
    // }

    async function getRecipe() {
        const response = await getRecipeFromMistral(ingredients)
        setRes(response as string)
    }

    function addIngredient(formData: FormData) {
        let newIngredient = formData.get("ingredient") as string;
        setIngredients(oldIngredient => [...oldIngredient, newIngredient]);
    }

    return (
        <main>
            {/* <form onSubmit={handleSubmit} className="add-ingredient-form" action='GET'> */}
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>
                    Add ingredient
                </button>
            </form>

            {ingredients.length ?
                <IngredientsList
                    ingredinetsList={ingredients}
                    getRecipe={getRecipe}
                />
                :
                null
            }
            {res ?
                <ClaudeRecipe
                    res={res}
                />
                :
                null
            }
        </main>
    );
}