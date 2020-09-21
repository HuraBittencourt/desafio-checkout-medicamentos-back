import express from 'express';
import PharmacyController from './modules/pharmacy/controller';

const app = express();
const port = 3000;

app.use(express.json())
app.get('/', (req, res) => {
  res.send("OK")
})

app.use(PharmacyController)

app.listen(port, () => {
  return console.log(`Server is listening on port ${port}`)
});