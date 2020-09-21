import { calculateDistance, calculatePrice } from "./helpers";
import { PharmacyList, PharmacyWithDistanceList, PharmacyWithPriceList } from "./interface";
import { PharmacyService } from "./service";

const REQUEST_LIMIT = 3

export class Pharmacies {
  constructor() { }

  async getNestPharmacy(pharmacies: PharmacyList[], medicines: Array<any>, userLocation: any) {
    const pharmaciesSortedByDistance = this.bestPharmacyLocation(pharmacies, userLocation)
    const pharmaciesSortedByPrice = await this.bestPricePharmacy(pharmaciesSortedByDistance, medicines)
    return pharmaciesSortedByPrice;
  }

  bestPharmacyLocation(pharmacies: PharmacyList[], userLocation: number) {
    return pharmacies.map(pharmacy => {
      const distance = calculateDistance(pharmacy.attributes, userLocation)
      return {
        ...pharmacy,
        distance
      } as PharmacyWithDistanceList
    }).sort((a: any, b: any) => a.distance - b.distance)
  }

  async bestPricePharmacy(pharmacies: PharmacyWithDistanceList[], medicines) {
    const filteredPharmacies = (await this.asyncFilter(pharmacies, async (pharmacy, index) => {
      if (index < REQUEST_LIMIT) {
        const pharmacyDetail = await new PharmacyService().getPharmacyDetails(pharmacy.id);
        const priceSum = calculatePrice(pharmacyDetail, medicines);
        return {
          ...pharmacy,
          ...priceSum
        } as PharmacyWithPriceList;
      }
    })).sort((a: any, b: any) => a.totalPrice - b.totalPrice);

    return filteredPharmacies
  }

  async asyncFilter(arr, predicate): Promise<any[]> {
    const result = await Promise.all(arr.map(predicate))

    return result.filter((curr, index) => result[index])
  }
}