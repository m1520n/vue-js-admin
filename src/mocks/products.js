const CATEGORIES = {
  deski: 'Deski',
  sztachety: 'Sztachety'
}

const UNITS = {
  weight: {
    kg: 'kg'
  },
  per: {
    mb: 'mb',
    m2: 'm2'
  },
  dimensions: {
    mm: 'mm',
    cm: 'cm',
    m: 'm'
  }
}

const CURRENCIES = {
  zl: 'zł',
  eur: 'EUR'
}

const PRODUCTS = [
  {
    name: 'PREMIUM+',
    description: 'Deska tarasowa kompozytowa to produkt nowej generacji, łączący trwałość i odporność tworzyw sztucznych z pięknym wyglądem drewna. Deska wykończona jest wygodnym w użytkowaniu, szerokim ryflowaniem. Dzięki drewnopodobnej fakturze, powierzchnia deski wygląda naturalnie i organicznie. Niezwykle trwały i odporny na szereg niszczących czynników materiał, z którego jest wykonana, zapewnia 100% komfort użytkowania. Produkt dostępny w siedmiu kolorach.',
    category: CATEGORIES.deski,
    active: true,
    weight: 4.1,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 161,
    height: 21,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 52,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'MODERN 1',
    description: 'Deska MODERN 1 to produkt nowej generacji, łączący trwałość i odporność tworzyw sztucznych z pięknym wyglądem drewna. Deska wykończona jest nowoczesnym ryflowaniem, a jej szlifowana faktura sprawia, że taras wygląda elegancko i w naturalny sposób komponuje się z pozostałymi elementami wykończenia. Niezwykle trwały i odporny na szereg niszczących czynników materiał, z którego jest wykonana, zapewnia 100% komfort użytkowania.',
    category: CATEGORIES.deski,
    active: true,
    weight: 2.8,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 147,
    height: 28,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 34,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'MODERN 2',
    description: 'Deska MODERN 2 to produkt nowej generacji, łączący trwałość i odporność tworzyw sztucznych z pięknym wyglądem drewna. Deska wykończona jest nowoczesnym ryflowaniem, a jej szlifowana faktura sprawia, że taras wygląda elegancko i w naturalny sposób komponuje się z pozostałymi elementami wykończenia. Niezwykle trwały i odporny na szereg niszczących czynników materiał, z którego jest wykonana, zapewnia 100% komfort użytkowania.',
    category: CATEGORIES.deski,
    active: true,
    weight: 2.8,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 147,
    height: 28,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 34,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'PREMIUM',
    description: 'Deska ta wykonana jest z kompozytu WPC, czyli nowoczesnego materiału, produkowanego na bazie polichlorku winylu (PVC) i wiórów drzewnych - taki skład zapewnia 100% komfort użytkowania. Deska wykończona jest efektownym, wąskim  ryflowaniem, a jej oryginalna faktura sprawia, że taras nabiera modnej dynamiki i  naturalnego charakteru. Produkt dostępny w siedmiu kolorach.',
    category: CATEGORIES.deski,
    active: true,
    weight: 3.8,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 161,
    height: 21,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 47,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'MODERN',
    description: 'Sztacheta ogrodzeniowa, wykonana z kompozytu WPC o wysokiej trwałości i odporności, dostępna w 7 kolorach. Gładka powierzchnia tej sztachety sprawia, że płot wygląda bardzo nowocześnie i solidnie.',
    category: CATEGORIES.sztachety,
    active: true,
    weight: 1.9,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 120,
    height: 15,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 19,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'PREMIUM',
    description: 'Sztacheta ogrodzeniowa, wykonana z kompozytu WPC o wysokiej trwałości i odporności, dostępna w 7 kolorach. Gładka powierzchnia sztachety PREMIUM sprawia, że ogrodzenie wygląda bardzo elegancko i solidnie.',
    category: CATEGORIES.sztachety,
    active: true,
    weight: 1.9,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 90,
    height: 15,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 19,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'PREMIUM +',
    description: 'Sztacheta ogrodzeniowa, wykonana z kompozytu WPC o wysokiej trwałości i odporności, dostępna w 7 kolorach. Dzięki drewnopodobnej fakturze sztacheta PREMIUM + wygląda niezwykle stylowo i naturalnie.',
    category: CATEGORIES.sztachety,
    active: true,
    weight: 1.9,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 90,
    height: 15,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 21,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  },
  {
    name: 'MODERN +',
    description: 'Sztacheta ogrodzeniowa, wykonana z kompozytu WPC o wysokiej trwałości i odporności, dostępna w 7 kolorach. Drewnopodobna faktura sztachety MODERN + sprawia, że odznacza się ona  naturalną, charakterystycznie nieregularną powierzchnią.',
    category: CATEGORIES.sztachety,
    active: true,
    weight: 1.9,
    weightUnit: UNITS.weight.kg,
    weightPer: 1,
    weightPerUnit: UNITS.per.mb,
    width: 120,
    height: 15,
    length: 'docinana na wymiar (bez dopłaty)',
    dimensionUnit: UNITS.dimensions.mm,
    price: 21,
    pricePer: 1,
    pricePerUnit: UNITS.per.mb,
    currency: CURRENCIES.zl
  }
]

export {
  CATEGORIES,
  PRODUCTS,
  UNITS,
  CURRENCIES
}
