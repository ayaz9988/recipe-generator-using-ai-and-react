export default function IngredientsList(props: any) {
    const ingredientsListItems = props.ingredinetsList.map(
        (ingredient: any) => (<li key={ingredient}>{ingredient}</li>)
    );
    return (
        <section>
            <h2>
                Ingredients on hand:
            </h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {
                props.ingredinetsList.length > 3 ?
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients</p>
                        </div>
                        <button onClick={props.getRecipe}>Get a recipe</button>
                    </div>

                    :
                    null
            }
        </section>
    );
}