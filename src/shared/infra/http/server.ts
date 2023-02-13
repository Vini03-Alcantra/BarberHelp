import { logger } from "../../../logger";
import { app } from "./app";

const PORT = process.env.PORT || 3014


app.listen(PORT, () => {
    logger.info(`Rodando na PORTA ${PORT}`)
})