
export const calculateDistance = (latLonPharmacy, latLonUser) => {
  const lat1 = latLonPharmacy.lat
  const lon1 = latLonPharmacy.lon
  const lat2 = latLonUser.lat
  const lon2 = latLonUser.lon

  const R = 6371e3;
  const pi1 = lat1 * Math.PI / 180;
  const pi2 = lat2 * Math.PI / 180;
  const deltaPi = (lat2 - lat1) * Math.PI / 180;
  const deltaLambda = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(deltaPi / 2) * Math.sin(deltaPi / 2) +
    Math.cos(pi1) * Math.cos(pi2) *
    Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return Number(d.toFixed());
}

/** ToDo
 * para respeitar a unica responsabilidade, 
 * quebrar funcao em [calcularPreco & adicionarMedicamentos]
 */
export const calculatePrice = (pharmacyMedicines, medicines: Array<string>) => {
  const priceSum = pharmacyMedicines.attributes.medicamentos.reduce((acc: any, { nome, preco }: any) => {
    if (medicines.includes(nome)) {
      let sum = Number(acc.totalPrice) + Number(preco)
      return {
        medicamentos: [
          {
            nome,
            preco,
          },
          ...acc.medicamentos
        ],
        totalPrice: sum.toFixed(2)
      }
    }
    return acc;
  }, { medicamentos: [], totalPrice: 0 })
  return priceSum
}