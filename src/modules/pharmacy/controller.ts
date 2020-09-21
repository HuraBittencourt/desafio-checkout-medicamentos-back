import express from 'express';
import { PharmacyService } from './service';
import { Pharmacies } from './useCase';
const router = express.Router();

router.post('/pharmacy', async (req, res) => {
const { medicines, userLocation } = req.body
  const pharmacies = await new PharmacyService().getAllPharmacies()
  const bestPharmacy = await new Pharmacies().getNestPharmacy(pharmacies, medicines, userLocation)
  res.send(bestPharmacy);
})

router.get('/pharmacy/:id', async (req, res) => {
  const pharmacyId = req.params.id
  const pharmacies = await new PharmacyService().getPharmacyDetails(Number(pharmacyId))
  res.send(pharmacies);
})

export default router;