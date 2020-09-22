export interface PharmacyList {
  type: string;
  id: number;
  attributes: {
    nome: string;
    lat: number;
    lon: number;
  };
  links: { self: string };
}

export interface PharmacyWithDistanceList {
  type: string;
  id: number;
  attributes: {
    nome: string;
    lat: number;
    lon: number;
  };
  links: { self: string };
  distance: number;
}

export interface PharmacyWithPriceList {
  type: string;
  id: number;
  attributes: {
    nome: string;
    lat: number;
    lon: number;
  };
  links: { self: string };
  distance: string;
  priceSum: number;
}


export interface PharmacyDetails {
  type: string;
  id: number;
  attributes: {
    nome: string;
    lat: number;
    lon: number;
  };
  medicamentos: [
    {
      nome: string;
      preco: number;
    }
  ]
}