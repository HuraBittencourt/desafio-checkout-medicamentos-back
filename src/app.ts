import express from 'express';
import PharmacyController from './modules/pharmacy/controller';
import cors from 'cors'

const app = express();
const port = 3001;

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send("OK")
})

app.use(PharmacyController)

app.listen(port, () => {
  return console.log(`Server is listening on port ${port}`)
});