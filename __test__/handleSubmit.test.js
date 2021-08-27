//Import file
import { handleSubmit } from "../src/client/js/formHandler.js";

//Describe Test

describe ("testing the submit button", () => {

    test("testing the submit function", () => {
        expect(handleSubmit).toBeDefined();
    })
});