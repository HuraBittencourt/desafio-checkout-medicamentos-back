import { expect } from "chai";
import { calculateDistance, calculatePrice } from "./helpers";

describe('Test Helper functions', () => {
  describe('Calculate Distance Function', () => {
    const location1 = { lat: -23.5648304, lon: -46.6436604 }
    const location2 = { lat: -23.5682305, lon: -46.6460529 }
    const distanceBetweenLocations = 450

    it('should be not null when passed correct locations', () => {
      const distance = calculateDistance(location1, location2)

      expect(distance).not.null;
    });

    it('should return 450 the distance between locations', () => {
      const distance = calculateDistance(location1, location2)

      expect(distance).equal(distanceBetweenLocations)
    });

    it('should return be a number', () => {
      const distance = calculateDistance(location1, location2)

      expect(typeof distance).equal('number')
    });
  });

  describe('Calculate Price Function', () => {
    const pharmacy =
    {
      type: "farmacias",
      id: 7,
      attributes: {
        nome: "Nova",
        lat: -23.566308,
        lon: -46.6433626,
        medicamentos: [
          {
            nome: "Ácido",
            preco: 51.22
          },
          {
            nome: "Água",
            preco: 70.42
          },
          {
            nome: "Betaserc",
            preco: 48.82
          },
          {
            nome: "Bromazepam",
            preco: 40.82
          }
        ]
      }
    }
    const mockTotalPrice = '162.46'
    const medicines = ['Ácido', 'Água', 'Bromazepam']

    const pharmaciesWithPrice = calculatePrice(pharmacy, medicines)
    const { medicamentos, totalPrice } = pharmaciesWithPrice

    it('should exists object key "medicamento" and "totalPrice"', () => {
      expect(medicamentos).not.null
      expect(totalPrice).not.null
    });

    it('should totalPrice be 162.46', () => {
      expect(totalPrice).equal(mockTotalPrice)
    });

    it('should medicamentos be an array with values', () => {
      const expectedMedicamentos = [
        {
          nome: "Bromazepam",
          preco: 40.82
        },
        {
          nome: "Água",
          preco: 70.42
        },
        {
          nome: "Ácido",
          preco: 51.22
        },
      ]
      expect(typeof medicamentos).equal('object')
      expect(medicamentos).eql(expectedMedicamentos)
    });
  });


});
