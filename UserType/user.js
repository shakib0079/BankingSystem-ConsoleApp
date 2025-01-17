import PromptSync from "prompt-sync";
import { userMenu } from "../Utilities/ScreenPlay.js";
import signInSignOutPage from "../app.js";
import ShowOwnInformation from "../Services/ShowOwnInformation.js";
import UpdateOwnInformation from "../Services/UpdateOwnInformation.js";
import Transaction from "../Services/Transaction.js";

const prompt = PromptSync({sigint:true});

export default function userTask(_user){
    do{
        userMenu(_user);
        const choice  = Number(prompt("Select a menu: "));
        switch (choice) {
            case 1:
                ShowOwnInformation(_user);
                break;
            case 2:
                UpdateOwnInformation(_user);
                break;
            case 3:
                Transaction(_user);
                break;
            case 4:
                signInSignOutPage();
                break;
            case 5:
                Transaction(_user);
                break;
            default:
                break;
        }

        prompt("Please enter any key to continue...");
    
    }while(true);
}
