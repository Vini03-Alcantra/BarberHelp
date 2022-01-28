import { app } from "./app";

const PORT = process.env.PORT || 3014


app.listen(PORT, () => {
    console.log(`Rodando na PORTA ${PORT}`)
})