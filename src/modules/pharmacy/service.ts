import { PharmacyDetails, PharmacyList } from "./interface";
import axios from 'axios';
import { BASE_URL } from "../../constants";

export class PharmacyService {
  constructor() { }

  //: Promise<PharmacyList[]>
  // .catch(error => { new Error(error) })
  async getAllPharmacies(): Promise<PharmacyList[]> {
    const pharmacies = await axios.get(`${BASE_URL}/desafio/farmacias`)
      .then(({ data: { data } }) => {
        return data as PharmacyList[]
      })

    return pharmacies;
  }

  // .catch(error => { new Error(error) })
  async getPharmacyDetails(id: number): Promise<PharmacyDetails> {
    const pharmacy = await axios.get(`${BASE_URL}/desafio/farmacias/${id}`)
      .then(({ data: { data } }) => {
        return data as PharmacyDetails
      })

    return pharmacy;
  }
}