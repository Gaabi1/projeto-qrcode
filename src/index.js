import prompt from "prompt";
import mainPrompt from "./prompts-schema/prompt-schema-main.js";
import createQrCode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    
    prompt.start()

    prompt.get(mainPrompt, async (err, choose) => {
        
        const option = Number(choose.select.trim());

        if (err) {
            console.error("Erro no prompt:", err);
            return;
        } 

        if(option ===1) {
            console.log("Voce escolheu 1")
            await createQrCode()
        }
        if(option ===2){
            await createPassword()
        } 
        
    })
    
}

main()